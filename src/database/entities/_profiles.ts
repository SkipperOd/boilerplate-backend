import { Entity, Column, OneToOne } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { ObjectType, Field } from "type-graphql";
import { _User } from "./_users";
@ObjectType()
@Entity()
export class _Profile extends Base {
  @Field()
  @Column()
  imageUrl: string;

  @OneToOne(() => _User, (user) => user.profile)
  user: _User;
}
