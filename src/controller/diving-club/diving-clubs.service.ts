import { Injectable } from '@nestjs/common';
import { DivingClub } from 'src/@models/diving-club';
import { BaseService } from 'src/@core/base-service';
import { AddressesService } from 'src/addresses/adresses.service';

@Injectable()
export class DivingClubsService extends BaseService<DivingClub> {
  protected override models: DivingClub[] = [
    {
      id: 1,
      name: 'Rennes Plongée',
      address: {
        city: 'Rennes',
        id: 1,
        street: 'Rue de la mer',
        streetNumber: '123 bis',
        zipCode: '35000',
      },
    },
  ];

  constructor(private readonly addressService: AddressesService) {
    super();
  }

  getDivingClubs(): Promise<DivingClub[]> {
    return this.getModels();
  }

  getDivingClub(id: number): Promise<DivingClub> {
    return this.getModel(id);
  }

  async addDivingClub(club: DivingClub): Promise<DivingClub> {
    const result: DivingClub = {
      ...club,
      address: await this.addressService.saveModel(club.address),
    };
    return this.addNewModel(result);
  }
  async updateDivingClub(club: DivingClub): Promise<DivingClub> {
    const result: DivingClub = {
      ...club,
      address: await this.addressService.saveModel(club.address),
    };
    return this.updateModel(result);
  }
  async deleteDivingClub(id: number): Promise<DivingClub> {
    return this.deleteModel(id);
  }
}