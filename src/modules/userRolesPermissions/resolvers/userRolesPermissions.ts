// import { Resolver, Mutation, Arg } from "type-graphql";
import { UserRolesPermissionsInput } from "../models/userRolesPermissions";
import { _User_Roles_Permissions } from "../../../database/entities/_users_roles_permissions";
import {
  Create,
  Update,
  Delete,
  SoftDelete,
  Restore,
} from "../../../utilities/commonResolvers/mutation";
// import { Resolver, Mutation, Arg } from "type-graphql";
import { Search, Get } from "../../../utilities/commonResolvers/query";
import { Pagination } from "../../common/input/pagination";
import { getMeta } from "../../../constants/entity/metaData";
import { Property } from "../../common/input/property";

export const SearchUserRolePermission = Search(
  "UserRolePermission", // suffix
  _User_Roles_Permissions, // return type
  Pagination, // input type
  _User_Roles_Permissions, // entity
  getMeta("userRolePermission") // meta data
);
export const GetUserRolePermission = Get(
  "UserRolePermission", //suffix
  _User_Roles_Permissions, // return type
  Property, // input type
  _User_Roles_Permissions, // entity
  getMeta("userRolePermission") //meta data
);

export const CreateUserRolePermission = Create(
  "UserRolePermission", //suffix
  _User_Roles_Permissions, // return type
  UserRolesPermissionsInput, // input type
  _User_Roles_Permissions // entity
);
export const UpdateUserRolePermission = Update(
  "UserRolePermission", //suffix
  _User_Roles_Permissions, // return type
  UserRolesPermissionsInput, // input type
  _User_Roles_Permissions // entity
);

export const DeleteUserRolePermission = Delete(
  "UserRolePermission", //suffix
  UserRolesPermissionsInput, // input type
  _User_Roles_Permissions // entity
);

export const SoftDeleteUserRolePermission = SoftDelete(
  "UserRolePermission", //suffix
  UserRolesPermissionsInput, // input type
  _User_Roles_Permissions // entity
);
export const RestoreDeletedUserRolePermission = Restore(
  "UserRolePermission", //suffix
  UserRolesPermissionsInput, // input type
  _User_Roles_Permissions // entity
);
