import { Entity, Column, OneToMany } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { Field, ObjectType } from "type-graphql";
import { _User_Roles_Permissions } from "./_users_roles_permissions";
@ObjectType()
@Entity()
export class _Roles extends Base {
  @Field()
  @Column()
  name: string;

  @OneToMany(() => _User_Roles, (userRoles) => userRoles.roles)
  @Field(() => [_User_Roles])
  userRoles: _User_Roles[];

  @OneToMany(() => _User_Roles_Permissions, (urp) => urp.roles)
  @Field(() => [_User_Roles_Permissions])
  rolesPermissions: _User_Roles_Permissions[];
}
