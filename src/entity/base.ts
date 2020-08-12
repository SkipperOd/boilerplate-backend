import { Entity, Column, BaseEntity, DeleteDateColumn,UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
@ObjectType()
@Entity()
export class Base extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("bool", { default: false })
    isDeleted: boolean;

    @Column("bool", { default: true })
    status: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    createdBy:string    

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    updatedBy:string  
    
    @DeleteDateColumn()
    deletedAt:Date


}