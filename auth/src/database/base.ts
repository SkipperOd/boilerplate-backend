import {
  Entity,
  Column,
  BaseEntity,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field, ID, Root } from "type-graphql";
@ObjectType()
@Entity()
export class Base extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string;

  // @Column("bool", { default: false })
  // isDeleted: boolean;

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

  @Field()
  createdDate(@Root() parent: Base): string {
    return parent.createdAt.toLocaleDateString();
  }
  @Field()
  updatedDate(@Root() parent: Base): string {
    return parent.updatedAt.toLocaleDateString();
  }
  @Field()
  updatedTime(@Root() parent: Base): string {
    return parent.updatedAt.toLocaleTimeString();
  }
  @Field()
  createdTime(@Root() parent: Base): string {
    return parent.createdAt.toLocaleTimeString();
  }
}
