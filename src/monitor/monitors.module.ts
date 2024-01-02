import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MonitorEntity } from 'src/@datas/MonitorEntity';
import { MonitorService } from './monitor.service';
import { MonitorController } from './monitor.controller';
import { PersonsModule } from 'src/persons/persons.module';

@Module({
  imports: [PersonsModule, TypeOrmModule.forFeature([MonitorEntity])],
  providers: [MonitorService],
  controllers: [MonitorController],
})
export class MonitorModule {}
