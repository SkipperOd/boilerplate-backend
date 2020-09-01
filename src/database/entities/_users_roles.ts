import { Entity, ManyToOne, OneToMany } from "typeorm";
import { Base } from "../base";
import { _User } from "./_users";
import { _User_Roles_Permissions } from "./_users_roles_permissions";
import { _Roles } from "./_roles";
import { ObjectType, Field } from "type-graphql";
@ObjectType()
@Entity()
export class _User_Roles extends Base {


  @ManyToOne(() => _User, (users) => users.userRoles)
  @Field(() => _User)
  users: _User;

  @OneToMany(() => _User_Roles_Permissions, (urp) => urp.userRoles)
  @Field(() => [_User_Roles_Permissions])
  userRolesPermissions: _User_Roles_Permissions[];

  @ManyToOne(() => _Roles, (role) => role.userRoles)
  @Field(() => _Roles)
  roles: _Roles;
}
