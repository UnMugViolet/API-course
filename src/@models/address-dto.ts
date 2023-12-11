import { ApiProperty } from "@nestjs/swagger";
import { Address } from "./address";

export class AddressDto implements Address {
    @ApiProperty()
    streetNumber: string;
    @ApiProperty()
    street: string;
    @ApiProperty()
    zipCode: string;
    @ApiProperty()
    city: string;
    @ApiProperty()
    id?: number;
}