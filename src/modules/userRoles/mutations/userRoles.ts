import { Resolver, Mutation, Arg } from "type-graphql";
import { _User } from "../../../database/entities/_users";
import { _User_Roles } from "../../../database/entities/_users_roles";
import { UserRolesInput } from "../models/userRoles";
import { _Roles } from "../../../database/entities/_roles";
import { getManager } from "typeorm";

@Resolver()
export class UserRolesMutationResolver {
  @Mutation(() => _User_Roles)
  async createUserRoles(@Arg("data") userRoles: UserRolesInput) {
    const userRole = new _User_Roles();

    const users = (await _User.findOne(userRoles.userId)) as _User;
    const roles = (await _Roles.findOne(userRoles.roleId)) as _Roles;

    userRole.users = users;
    userRole.roles = roles;

    console.log(userRole);

    await getManager().connection.createEntityManager().save(userRole);
    console.log(userRole);
    users.userRoles = [userRole];
    await getManager().connection.createEntityManager().save(users);
    console.log(userRole);

    return userRole;
  }
}
