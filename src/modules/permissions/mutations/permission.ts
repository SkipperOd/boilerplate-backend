// import { Resolver, Mutation, Arg } from "type-graphql";
import { PermissionsInput } from "../models/permissions";
import { _Permissions } from "../../../database/entities/_permissions";
import {
  Create,
  Update,
  Delete,
  SoftDelete,
  Restore,
} from "../../../../src/utilities/commonResolvers/mutation";
// import { Resolver, Mutation, Arg } from "type-graphql";
import {
  Search,
  Get,
} from "../../../../src/utilities/commonResolvers/query";
import { Pagination } from "../../../../src/modules/common/input/pagination";
import { getRelations } from "../../../../src/constants/entity/relations";
import { Property } from "../../../../src/modules/common/input/property";

export const SearchPermission = Search(
  "Permissions",
  _Permissions,
  Pagination,
  _Permissions,
  getRelations("permission")
);
export const GetPermission = Get(
  "Permission",
  _Permissions,
  Property,
  _Permissions,
  getRelations("permission")
);

export const CreatePermission = Create(
  "Permission",
  _Permissions,
  PermissionsInput,
  _Permissions
);
export const UpdatePermission = Update(
  "Permission",
  _Permissions,
  PermissionsInput,
  _Permissions
);

export const DeletePermission = Delete(
  "Permission",
  PermissionsInput,
  _Permissions
);

export const SoftDeletePermission = SoftDelete(
  "Permission",
  PermissionsInput,
  _Permissions
);
export const RestoreDeletedPermission = Restore(
  "Permission",
  PermissionsInput,
  _Permissions
);
