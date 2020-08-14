import { Entity, Column, OneToMany } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { Field ,ObjectType} from "type-graphql";
@ObjectType()
@Entity()
export class _Roles extends Base {
  @Field()
  @Column()
  name: string;

  @OneToMany(() => _User_Roles, userRoles => userRoles.roles)
  @Field(() => [_User_Roles])
  userRoles: _User_Roles[];


}
