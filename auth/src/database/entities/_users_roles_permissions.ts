import { Entity, ManyToOne } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { _Permissions } from "./_permissions";
import { Field, ObjectType } from "type-graphql";
import { _Roles } from "./_roles";
@ObjectType()
@Entity()
export class _User_Roles_Permissions extends Base {
  @ManyToOne(() => _Roles, (roles) => roles.rolesPermissions,{ onDelete:"CASCADE"})
  @Field(() => _Roles)
  roles: _Roles;

  @ManyToOne(
    () => _Permissions,
    (permissions) => permissions.userRolesPermissions,
    { onDelete:"CASCADE"}
  )
  @Field(() => _Permissions)
  permissions: _Permissions;
}
