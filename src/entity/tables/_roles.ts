import { Entity, Column, OneToMany } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
@Entity()
export class _Roles extends Base {

  @Column()
  name: string;

  @OneToMany(() => _User_Roles, userRoles => userRoles.roles)
  userRoles: _User_Roles[];


}
