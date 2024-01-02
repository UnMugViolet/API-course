import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Identifier } from 'src/@models/Identifier';
import { PersonEntity } from './PersonEntity';

@Entity()
export class MonitorEntity implements Identifier {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  rank: number;
  
  @ManyToOne((type) => PersonEntity, (person) => person.monitor)
  person: PersonEntity;
}