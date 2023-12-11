import { Identifier } from "./identifier";
import { Address } from './address';


export interface DivingClub extends Identifier {
    name: string;
    address: Address;
}