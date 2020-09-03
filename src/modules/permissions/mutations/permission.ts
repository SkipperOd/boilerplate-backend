import { Resolver, Mutation, Arg } from "type-graphql";
import { PermissionsInput } from "../models/permissions";
import { _Permissions } from "../../../database/entities/_permissions";


@Resolver()
export class PermissionMutationResolver {

    @Mutation(() => _Permissions)
    async createPermission(@Arg("data") perm: PermissionsInput) {
        const permission = new _Permissions();
        permission.name = perm.name

        return await _Permissions.create(permission).save();

    }
}
