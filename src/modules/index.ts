import { buildSchema } from "type-graphql";

//queries
import { UserQueryResolver, getAllUsers, getUser } from "./users/queries/user";
import { PermissionQueryResolver } from "./permissions/queries/permission";
import { RoleQueryResolver } from "./roles/queries/roles";
//mutation
import { RegisterMutationResolver } from "./users/mutations/register";
import { LoginMutationResolver } from "./users/mutations/login";
import {
  CreatePermission,
  UpdatePermission,
  DeletePermission,
  SoftDeletePermission,
  SearchPermission,
  GetPermission,
  RestoreDeletedPermission,
} from "./permissions/mutations/permission";
import { RoleMutationResolver } from "./roles/mutations/roles";
import { UserRolesMutationResolver } from "./userRoles/mutations/userRoles";
import { UserRolesPermissionsInputMutationResolver } from "./userRolesPermissions/mutations/userRolesPermissions";
import { IsAuthenticated } from "./middleware/Auth/authentication";
import { ConfirmUserMutationResolver } from "./users/mutations/confirmUser";
import { ForgotPasswordMutationResolver } from "./users/mutations/forgotPassword";
import { ChangePasswordMutationResolver } from "./users/mutations/changePassword";
import { LogoutMutationResolver } from "./users/mutations/logout";

export const MetaData = buildSchema({
  resolvers: [
    // Mutation resolvers
    UserRolesPermissionsInputMutationResolver,
    RegisterMutationResolver,
    // PermissionMutationResolver,
    RoleMutationResolver,
    LoginMutationResolver,
    UserRolesMutationResolver,
    ConfirmUserMutationResolver,
    ForgotPasswordMutationResolver,
    ChangePasswordMutationResolver,
    LogoutMutationResolver,
    // Permission Operations
    CreatePermission,
    UpdatePermission,
    DeletePermission,
    SoftDeletePermission,
    SearchPermission,
    GetPermission,
    RestoreDeletedPermission,

    // Query resolvers
    UserQueryResolver,
    PermissionQueryResolver,
    RoleQueryResolver,
    getAllUsers,
    getUser,
  ],
  globalMiddlewares: [IsAuthenticated],
});
