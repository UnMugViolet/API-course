import { Injectable } from '@nestjs/common';
import { BaseService } from '../@core/base-service';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { MonitorDto } from 'src/@model-dto/monitor-dto';
import { PersonsService } from 'src/persons/persons.service';
import { MonitorEntity } from 'src/@datas/MonitorEntity';
import { Monitor } from 'src/@models/monitor';
import { PersonEntity } from 'src/@datas/PersonEntity';

@Injectable()
export class MonitorService extends BaseService<MonitorEntity> {
  constructor(
    @InjectRepository(MonitorEntity)
    protected readonly repository: Repository<MonitorEntity>,
    protected readonly dataSource: DataSource,
    private readonly personsService: PersonsService,
    ) {
    super(dataSource);
  }

  async getMonitors(): Promise<MonitorDto[]> {
    const monitors = await this.repository.find();
    return this.mapEntityToDto(...monitors);
  }

  async getMonitor(id: number): Promise<MonitorDto> {
    const monitor = await this.repository.findOneBy({ id });
    return this.mapEntityToDto(monitor)?.[0];
  }

  private mapEntityToDto(...entities:MonitorEntity[]): MonitorDto[] {
    return entities.map((entity) => ({
        ...entity.person,
        monitorNumber: entity.id,
        rank: entity.rank,
    }));
  }

  async saveMonitor(monitor: MonitorDto): Promise<Monitor> {
    const person = await this.personsService.savePerson(monitor) as PersonEntity;
    let entity = new MonitorEntity();
    entity.person = person;
    entity.id = monitor.monitorNumber;
    entity.rank = monitor.rank;

    entity = await this.saveEntity(entity);
    return this.mapEntityToDto(entity)?.[0];
  }
}
