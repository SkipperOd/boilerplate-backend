import { Entity, ManyToOne } from "typeorm";
import { Base } from "../base";
import { _User } from "./_users";
import { _User_Roles_Permissions } from "./_users_roles_permissions";
import { _Roles } from "./_roles";
import { ObjectType, Field } from "type-graphql";
@ObjectType()
@Entity()


export class _User_Roles extends Base {
  @ManyToOne(() => _User, (users) => users.userRoles,{ onDelete:"CASCADE"})
  @Field(() => _User)
  users: _User;

  @ManyToOne(() => _Roles, (role) => role.userRoles,{ onDelete:"CASCADE"})
  @Field(() => _Roles)
  roles: _Roles;
}
