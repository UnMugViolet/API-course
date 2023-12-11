import { ApiProperty } from "@nestjs/swagger";
import { DivingClub } from "./diving-club";
import { AddressDto } from "./address-dto";

export class DivingClubDto implements DivingClub {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    address: AddressDto;
}