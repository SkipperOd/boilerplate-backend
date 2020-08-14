import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { _Countires } from "./_countries";

@Entity()
export class _States extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => _Countires, (Countires) => Countires.States)
  Countires: _Countires[];
}
