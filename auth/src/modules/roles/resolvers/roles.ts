// import { Resolver, Mutation, Arg } from "type-graphql";
import { RolesInput } from "../models/roles";
import { _Roles } from "../../../database/entities/_roles";
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

export const SearchRole = Search(
  "Role", // suffix
  _Roles, // return type
  Pagination, // input type
  _Roles, // entity
  getMeta("role") // meta data
);
export const GetRole = Get(
  "Role", //suffix
  _Roles, // return type
  Property, // input type
  _Roles, // entity
  getMeta("role") //meta data
);

export const CreateRole = Create(
  "Role", //suffix
  _Roles, // return type
  RolesInput, // input type
  _Roles // entity
);
export const UpdateRole = Update(
  "Role", //suffix
  _Roles, // return type
  RolesInput, // input type
  _Roles // entity
);

export const DeleteRole = Delete(
  "Role", //suffix
  RolesInput, // input type
  _Roles // entity
);

export const SoftDeleteRole = SoftDelete(
  "Role", //suffix
  RolesInput, // input type
  _Roles // entity
);
export const RestoreDeletedRole = Restore(
  "Role", //suffix
  RolesInput, // input type
  _Roles // entity
);
