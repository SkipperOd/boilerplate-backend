import { Entity, Column, ManyToOne } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { _Permissions } from "./_permissions";
import { Field, ObjectType } from "type-graphql";
@ObjectType()
@Entity()
export class _User_Roles_Permissions extends Base {
  @Column()
  @Field()
  name: string;

  @ManyToOne(
    () => _User_Roles, 
    (userRoles) => userRoles.userRolesPermissions)
  @Field(() => _User_Roles)
  userRoles: _User_Roles;

  @ManyToOne(
    () => _Permissions,
    (permissions) => permissions.userRolesPermissions
  )
  @Field(() => _Permissions)
  permissions: _Permissions;
}
