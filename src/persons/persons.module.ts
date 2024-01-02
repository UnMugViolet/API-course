import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonEntity } from '../@datas/PersonEntity';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { AddressesModule } from '../addresses/addresses-module';
import { AddressesService } from 'src/addresses/addresses.service';
import { AddressEntity } from 'src/@datas/AddressEntity';

@Module({
  imports: [AddressesModule, TypeOrmModule.forFeature([PersonEntity]), TypeOrmModule.forFeature([AddressEntity])],
  providers: [PersonsService, AddressesService],
  controllers: [PersonsController],
  exports: [PersonsService],
})
export class PersonsModule {}
