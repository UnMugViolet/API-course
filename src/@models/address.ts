import { Identifier } from "./identifier";

export interface Address extends Identifier {
    streetNumber : string;
    street: string;
    zipCode: string;
    city: string;
}