import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AddressEntity } from './AddressEntity';
import { Monitor } from '../@models/monitor';

@Entity()
export class MonitorEntity implements Monitor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  phoneNumber: string;
  @Column()
  birthDate: Date;
  @Column()
  bloodGroup: string;
  @Column()
  grade: string;

  @ManyToOne((type) => AddressEntity, (address) => address.persons)
  address: AddressEntity;
}