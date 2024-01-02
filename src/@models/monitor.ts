import { Identifier } from './Identifier';
import { Person } from './person';
import { Address } from './address';

export interface Monitor extends Person, Identifier {
    rank?: number;
    monitorNumber?: number;
}
