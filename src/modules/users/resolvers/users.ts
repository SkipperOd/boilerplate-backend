import { _User } from "../../../database/entities/_users";
import { Search, Get } from "../../../../src/utilities/commonResolvers/query";
import { Pagination } from "../../../../src/modules/common/input/pagination";
import { getMeta } from "../../../constants/entity/metaData";
import { Property } from "../../common/input/property";
import {
  Create,
  Update,
  Delete,
  SoftDelete,
  Restore,
} from "../../../utilities/commonResolvers/mutation";
import { RegistrationInput } from "../models/registration";

export const SearchUser = Search(
  "Users", // suffix
  _User, // return type
  Pagination, // input type
  _User, // entity
  getMeta("user") // meta data
) as any;

export const GetUser = Get("User", _User, Property, _User, getMeta("user"));
export const CreateUser = Create(
  "Users", // suffix
  _User, // return type
  RegistrationInput, // input type
  _User // entity
);
export const UpdateUser = Update("Users", _User, RegistrationInput, _User);

export const DeleteUser = Delete("Users", RegistrationInput, _User);

export const SoftDeleteUser = SoftDelete("Users", RegistrationInput, _User);
export const RestoreDeletedUser = Restore("Users", RegistrationInput, _User);
