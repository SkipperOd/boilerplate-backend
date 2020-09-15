import { buildSchema } from "type-graphql";

//queries
//mutation
import { RegisterMutationResolver } from "./users/resolvers/register";
import { LoginMutationResolver } from "./users/resolvers/login";
import {
  CreatePermission,
  UpdatePermission,
  DeletePermission,
  SoftDeletePermission,
  SearchPermission,
  GetPermission,
  RestoreDeletedPermission,
} from "./permissions/resolvers/permission";
import { IsAuthenticated } from "./middleware/Auth/authentication";
import { ConfirmUserMutationResolver } from "./users/resolvers/confirmUser";
import { ForgotPasswordMutationResolver } from "./users/resolvers/forgotPassword";
import { ChangePasswordMutationResolver } from "./users/resolvers/changePassword";
import { LogoutMutationResolver } from "./users/resolvers/logout";
import {
  SearchRole,
  GetRole,
  CreateRole,
  UpdateRole,
  DeleteRole,
  SoftDeleteRole,
  RestoreDeletedRole,
} from "./roles/resolvers/roles";
import {
  // SearchUserRoles,
  // GetUserRoles,
  // CreateUserRoles,
  // DeleteUserRoles,
  // UpdateUserRoles,
  // RestoreDeletedUserRoles,
  // SoftDeleteUserRoles,
  UserRolesResolver,
} from "./userRoles/resolvers/userRoles";
import {
  // SearchUserRolePermission,
  // GetUserRolePermission,
  // UpdateUserRolePermission,
  // CreateUserRolePermission,
  // DeleteUserRolePermission,
  // SoftDeleteUserRolePermission,
  // RestoreDeletedUserRolePermission,
  RolesPermissionResolver,
} from "./rolesPermissions/resolvers/rolesPermissions";
import {
  SearchUser,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  SoftDeleteUser,
  RestoreDeletedUser,
} from "./users/resolvers/users";

export const MetaData = buildSchema({
  resolvers: [
    // User resolvers
    RegisterMutationResolver,
    LoginMutationResolver,
    ConfirmUserMutationResolver,
    ForgotPasswordMutationResolver,
    ChangePasswordMutationResolver,
    LogoutMutationResolver,
    SearchUser,
    GetUser,
    CreateUser,
    UpdateUser,
    DeleteUser,
    SoftDeleteUser,
    RestoreDeletedUser,
    // Role Opertaions
    SearchRole,
    GetRole,
    CreateRole,
    UpdateRole,
    DeleteRole,
    SoftDeleteRole,
    RestoreDeletedRole,

    //User Roles Permission Operations
    // SearchUserRolePermission,
    // GetUserRolePermission,
    // UpdateUserRolePermission,
    // CreateUserRolePermission,
    // DeleteUserRolePermission,
    // SoftDeleteUserRolePermission,
    // RestoreDeletedUserRolePermission,
    RolesPermissionResolver,

    // User Roles Operations
    // SearchUserRoles,
    // GetUserRoles,
    // CreateUserRoles,
    // DeleteUserRoles,
    // UpdateUserRoles,
    // RestoreDeletedUserRoles,
    // SoftDeleteUserRoles,
    UserRolesResolver,
    // Permission Operations
    CreatePermission,
    UpdatePermission,
    DeletePermission,
    SoftDeletePermission,
    SearchPermission,
    GetPermission,
    RestoreDeletedPermission,
  ],
  globalMiddlewares: [IsAuthenticated],
});
