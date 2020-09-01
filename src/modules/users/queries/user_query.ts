import { Resolver, Query, Arg, Ctx } from "type-graphql";
import { _User } from "../../../database/entities/_users";
import { getRepository } from "typeorm";
import { ApplicationContext } from "src/utilities/types/application_context";





@Resolver()
export class UserQueryResolver {
 
  @Query(() => [_User])
  async user() {
    const userRepository = getRepository(_User);
    const user = await userRepository.find({
      relations: [
        "profile",
        "userRoles",
        "userRoles.userRolesPermissions",
        "userRoles.roles",
        "userRoles.userRolesPermissions.permissions",
      ],
    });
    return user;
  }
  

  @Query(() => _User)
  async userById(@Arg("userId") userId: string) {
    const userRepository = getRepository(_User);
    const user = await userRepository.findOne(userId, {
      relations: ["profile", "userRoles"],
    });
    return user;
  }

  @Query(() => _User, { nullable: true })
  async Me(@Ctx() ctx: ApplicationContext) {
    const userRepository = getRepository(_User);
    const user = await userRepository.findOne({
      where: {
        id: ctx.req.session!.userId,
      },
      relations: [
        "profile",
        "userRoles",
        "userRoles.userRolesPermissions",
        "userRoles.userRolesPermissions.permissions",
      ],
    });
    return user;
  }
}
