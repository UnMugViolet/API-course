import { Identifier } from './Identifier';
import { Person } from './person';
import { Address } from './address';

export interface Monitor extends Person {
    firstName: string;
    lastName: string;
    address: Address;
    phoneNumber: string;
    birthDate: Date;
    bloodGroup: string;
    grade: string;
    formerDivingClub: string;
    formerHiredDate: Date;
    formerFiredDate: Date;
}
