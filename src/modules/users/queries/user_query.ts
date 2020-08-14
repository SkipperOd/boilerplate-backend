import { Resolver, Query, Arg } from "type-graphql";
import { _User } from "../../../database/entities/_users";
import { getRepository } from "typeorm";

@Resolver()
export class UserQueryResolver {
  @Query(() => [_User])
  async User() {
    const userRepository = getRepository(_User);
    const user = await userRepository.find({
      relations: [
        "profile",
        "userRoles",
        "userRoles.userRolesPermissions",
        "userRoles.userRolesPermissions.permissions",
      ],
    });
    console.log(user);
    return user;
  }

  @Query(() => _User)
  async userById(@Arg("userId") userId: string) {
    const userRepository = getRepository(_User);
    const user = await userRepository.findOne(userId, {
      relations: ["profile", "userRoles"],
    });
    console.log(user);
    return user;
  }
}
