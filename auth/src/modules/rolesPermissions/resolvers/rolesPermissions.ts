
import { RolesPermissionsInput } from "../models/rolesPermissions";
import { _User_Roles_Permissions } from "../../../database/entities/_users_roles_permissions";

import { Resolver, Mutation, Arg } from "type-graphql";
import { getManager } from "typeorm";
import { _Permissions } from "../../../../src/database/entities/_permissions";
import { _Roles } from "../../../../src/database/entities/_roles";

@Resolver()
export class RolesPermissionResolver {
  @Mutation(() => _User_Roles_Permissions)
  async createRolesPermission(
    @Arg("data") userRolesPermission: RolesPermissionsInput
  ) {
    const userRolePermissions = new _User_Roles_Permissions();

    const permissions = (await _Permissions.findOne(
      userRolesPermission.permissionId
    )) as _Permissions;

    const role = (await _Roles.findOne(
      userRolesPermission.roleId
    )) as _Roles;

    userRolePermissions.roles = role;
    userRolePermissions.permissions = permissions;

    await getManager()
      .connection.createEntityManager()
      .save(userRolePermissions);
    console.log(userRolePermissions);
    // userRoles.userRolesPermissions = [userRolePermissions];
    await getManager().connection.createEntityManager().save(role);
    console.log(role);
    return userRolePermissions;
  }
}
