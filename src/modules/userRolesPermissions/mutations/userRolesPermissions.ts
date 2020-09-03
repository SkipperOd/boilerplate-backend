import { Resolver, Mutation, Arg } from "type-graphql";
import { _User } from "../../../database/entities/_users";
import { _User_Roles } from "../../../database/entities/_users_roles";
import { UserRolesPermissionsInput } from "../models/userRolesPermissions";
import { _Roles } from "../../../database/entities/_roles";
import { getManager } from "typeorm";
import { _User_Roles_Permissions } from "../../../database/entities/_users_roles_permissions";
import { _Permissions } from "../../../database/entities/_permissions";

@Resolver()
export class UserRolesPermissionsInputMutationResolver {
  @Mutation(() => _User_Roles_Permissions)
  async createUserRolesPermissions(
    @Arg("data") userRolesPermission: UserRolesPermissionsInput
  ) {
    const userRolePermissions = new _User_Roles_Permissions();

    const permissions = (await _Permissions.findOne(
      userRolesPermission.permissionId
    )) as _Permissions;
    const userRoles = (await _User_Roles.findOne(
      userRolesPermission.userRoleId
    )) as _User_Roles;

    userRolePermissions.userRoles = userRoles;
    userRolePermissions.permissions = permissions;

    await getManager()
      .connection.createEntityManager()
      .save(userRolePermissions);
    console.log(userRolePermissions);
    userRoles.userRolesPermissions = [userRolePermissions];
    await getManager().connection.createEntityManager().save(userRoles);
    console.log(userRoles);
    return userRolePermissions;
  }
}
