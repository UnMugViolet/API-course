import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonsModule } from 'src/@datas/PersonEntity';
import { MonitorService } from './monitor.service';

@Module({
  imports: [PersonsModule, TypeOrmModule.forFeature([PersonEntity])],
  providers: [MonitorService],
  controllers: [MonitorController],
})
export class MonitorModule {}
