import { Resolver, Query } from "type-graphql";
import { _Roles } from "../../../database/entities/_roles";

@Resolver()
export class RoleQueryResolver {
  @Query(() => [_Roles])
  async getRoles() {
    return await _Roles.find();
  }
}
