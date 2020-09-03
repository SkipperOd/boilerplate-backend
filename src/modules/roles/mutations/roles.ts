import { Resolver, Mutation, Arg } from "type-graphql";
import { RolesInput } from "../models/roles";
import { _Roles } from "../../../database/entities/_roles";

@Resolver()
export class RoleMutationResolver {
  @Mutation(() => _Roles)
  async createRole(@Arg("data") roles: RolesInput) {
    const role = new _Roles();
    role.name = roles.name;

    return await _Roles.create(role).save();
  }
}
