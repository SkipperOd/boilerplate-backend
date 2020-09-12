// import { Resolver, Mutation, Arg } from "type-graphql";
import { UserRolesInput } from "../models/userRoles";
import { _User_Roles } from "../../../database/entities/_users_roles";
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

export const SearchUserRoles = Search(
  "UserRole", // suffix
  _User_Roles, // return type
  Pagination, // input type
  _User_Roles, // entity
  getMeta("userRole") // meta data
);
export const GetUserRoles = Get(
  "UserRole", //suffix
  _User_Roles, // return type
  Property, // input type
  _User_Roles, // entity
  getMeta("userRole") //meta data
);

export const CreateUserRoles = Create(
  "UserRole", //suffix
  _User_Roles, // return type
  UserRolesInput, // input type
  _User_Roles // entity
);
export const UpdateUserRoles = Update(
  "UserRole", //suffix
  _User_Roles, // return type
  UserRolesInput, // input type
  _User_Roles // entity
);

export const DeleteUserRoles = Delete(
  "UserRole", //suffix
  UserRolesInput, // input type
  _User_Roles // entity
);

export const SoftDeleteUserRoles = SoftDelete(
  "UserRole", //suffix
  UserRolesInput, // input type
  _User_Roles // entity
);
export const RestoreDeletedUserRoles = Restore(
  "UserRole", //suffix
  UserRolesInput, // input type
  _User_Roles // entity
);
