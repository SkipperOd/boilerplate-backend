import { Entity, Column, ManyToOne } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { _Permissions } from "./_permissions";
@Entity()
export class _User_Roles_Permissions extends Base {

  @Column()
  name: string;

  @ManyToOne(() => _User_Roles, userRoles => userRoles.userRolesPermissions)
  userRoles: _User_Roles[];

  @ManyToOne(() => _Permissions, permissions => permissions.userRolesPermissions)
  permissions: _Permissions[];


}
