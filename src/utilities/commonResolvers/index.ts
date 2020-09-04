import { GetAllResolver } from "./query";
import { _User } from "../../../src/database/entities/_users";
import { Pagination } from "../../../src/modules/common/input/pagination";
import { getRelations } from "../../constants/entity/relations";

export const GetUser = GetAllResolver("Users", _User, Pagination, _User, getRelations('user')) as any;
