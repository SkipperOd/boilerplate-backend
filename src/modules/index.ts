import { buildSchema } from "type-graphql";

//queries
import { UserQueryResolver } from "./users/queries/user_query";
import { PermissionQueryResolver } from "./permissions/queries/permission_query";
import { RoleQueryResolver } from "./roles/queries/roles_query";
//mutation
import { RegisterMutationResolver } from "./users/mutations/register_mutation";
import { LoginMutationResolver } from "./users/mutations/login_mutation";
import { PermissionMutationResolver } from "./permissions/mutations/permission_mutation";
import { RoleMutationResolver } from "./roles/mutations/roles_mutation";
import { UserRolesMutationResolver } from "./user_roles/mutations/user_roles_mutation";
import { UserRolesPermissionsInputMutationResolver } from "./user_roles_permissions/mutations/User_Roles_Permissions_mutation";
import { IsAuthenticated } from "./middleware/Auth/authentication";
import { ConfirmUserMutationResolver } from "./users/mutations/confirmUser";
import { ForgotPasswordMutationResolver } from "./users/mutations/forgotPassword";
import { ChangePasswordMutationResolver } from "./users/mutations/changePassword";

export const MetaData = buildSchema({
         resolvers: [
           // Mutation resolvers
           UserRolesPermissionsInputMutationResolver,
           RegisterMutationResolver,
           PermissionMutationResolver,
           RoleMutationResolver,
           LoginMutationResolver,
           UserRolesMutationResolver,
           ConfirmUserMutationResolver,
           ForgotPasswordMutationResolver,
           ChangePasswordMutationResolver,

           // Query resolvers
           UserQueryResolver,
           PermissionQueryResolver,
           RoleQueryResolver,

         ],
         globalMiddlewares: [IsAuthenticated],
       });
