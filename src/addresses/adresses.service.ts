import { Injectable } from '@nestjs/common';
import { Address } from '../@models/address';
import { BaseService } from '../@core/base-service';

@Injectable()
export class AddressesService extends BaseService<Address> {
  protected override models: Address[] = [
    {
      city: 'Rennes',
      id: 1,
      street: 'Rue de la mer',
      streetNumber: '123 bis',
      zipCode: '35000',
    },
  ];

  getAddresses(): Promise<Address[]> {
    return this.getModels();
  }

  getAddress(id: number): Promise<Address> {
    return this.getModel(id);
  }

  addAddress(address: Address): Promise<Address> {
    return this.addNewModel(address);
  }
  updateAddress(address: Address): Promise<Address> {
    return this.updateModel(address);
  }
  deleteAddress(id: number): Promise<Address> {
    return this.deleteModel(id);
  }
}