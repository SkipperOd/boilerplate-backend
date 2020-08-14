import {
  Entity,
  Column,
  BaseEntity,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
@ObjectType()
@Entity()
export class Base extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  @Column("bool", { default: false })
  isDeleted: boolean;

  @Column("bool", { default: true })
  status: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  createdBy: string;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  updatedBy: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
