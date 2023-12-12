import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address-dto';
import { DivingClub } from './diving-club';

export class DivingClubDto implements DivingClub {
  @ApiProperty()
  id?: number | undefined;
  @ApiProperty()
  name: string;
  @ApiProperty()
  phonenumber: string;
  @ApiProperty()
  address: AddressDto;
}
