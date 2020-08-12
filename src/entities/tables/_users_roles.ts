import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Base } from "../base";
import { _User } from "./_users";
import { _User_Roles_Permissions } from "./_users_roles_permissions";
import { _Roles } from "./_roles";

@Entity()
export class _User_Roles extends Base {

  @Column()
  name: string;

  @ManyToOne(() => _User, users => users.userRoles)
  users: _User[];

  @OneToMany(() => _User_Roles_Permissions, userRolesPermissions => userRolesPermissions.userRoles)
  userRolesPermissions: _User_Roles_Permissions[];

  @ManyToOne(() => _Roles, role => role.userRoles)
  roles: _Roles[];

}
