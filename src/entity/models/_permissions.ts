import { Entity, Column, OneToMany } from "typeorm";
import { Base } from "../base";
import { _User } from "./_users";
import { _User_Roles_Permissions } from "./_users_roles_permissions";
import { _Roles } from "./_roles";

@Entity()
export class _Permissions extends Base {

  @Column()
  name: string;

  @OneToMany(() => _User_Roles_Permissions, userRolesPermissions => userRolesPermissions.permissions)
  userRolesPermissions: _User_Roles_Permissions[];


}
