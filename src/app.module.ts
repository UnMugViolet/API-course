import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DivingClubsController } from './controller/diving-club/diving-clubs.controller';
import { DivingClubsService } from './controller/diving-club/diving-clubs.service';
import { AddressesService } from './addresses/adresses.service';
import { AddressesController } from './addresses/addresses.controller';

@Module({
  imports: [],
  controllers: [AppController, DivingClubsController, AddressesController ],
  providers: [AppService, DivingClubsService, AddressesService],
})
export class AppModule {}
