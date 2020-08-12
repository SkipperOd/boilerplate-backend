import { Entity, Column, OneToMany } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { ObjectType, Field } from "type-graphql";
@ObjectType()
@Entity()
export class _User extends Base {

  @Column({ nullable: true })
  authToken: string;

  @Column({ nullable: true })
  resetToken: string;
  @Field()
  @Column()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column("text", { unique: true })
  userName: string;
  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  status: boolean;
  @Field()
  @Column()
  gender: string;

  @Column("bool", { default: false })
  confirmed: boolean;

  @OneToMany(() => _User_Roles, userRoles => userRoles.users)
  userRoles: _User_Roles[];
}
