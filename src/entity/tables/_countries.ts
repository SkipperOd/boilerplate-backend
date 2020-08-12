import { Entity, Column, BaseEntity, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import { _States } from "./_states";
@Entity()
export class _Countires extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string

    @OneToMany(() => _States, States => States.Countires)
    States: _States[];
    
}
