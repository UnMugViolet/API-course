import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesService } from './addresses.service';
import { AddressEntity } from '../@datas/AddressEntity';
import { AddressesController } from './addresses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  providers: [AddressesService],
  controllers: [AddressesController],
})
export class AddressesModule {}
