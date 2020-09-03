import { Resolver, Query } from "type-graphql";
import { _Permissions } from "../../../database/entities/_permissions";


@Resolver()
export class PermissionQueryResolver {

  @Query(() => [_Permissions])
  async getPermission() {
    return await _Permissions.find();
  }

}
