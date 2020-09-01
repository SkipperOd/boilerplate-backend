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
import { ConfirmUserResolver } from "./users/mutations/confirmUser";

export const MetaData = buildSchema({
         resolvers: [
           // Mutation resolvers
           UserRolesPermissionsInputMutationResolver,
           RegisterMutationResolver,
           PermissionMutationResolver,
           RoleMutationResolver,
           LoginMutationResolver,
           UserRolesMutationResolver,

           // Query resolvers
           UserQueryResolver,
           PermissionQueryResolver,
           RoleQueryResolver,
           ConfirmUserResolver
         ],
         globalMiddlewares: [IsAuthenticated],
       });
