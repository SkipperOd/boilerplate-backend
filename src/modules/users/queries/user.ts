import { Resolver, Query, Ctx } from "type-graphql";
import { _User } from "../../../database/entities/_users";
import { getRepository } from "typeorm";
import { ApplicationContext } from "src/utilities/types/applicationContext";
import { Search, Get } from "../../../../src/utilities/commonResolvers/query";
import { Pagination } from "../../../../src/modules/common/input/pagination";
import { getRelations } from "../../../../src/constants/entity/relations";
import { Property } from "../../common/input/property";

export const getAllUsers = Search(
  "Users",
  _User,
  Pagination,
  _User,
  getRelations("user")
) as any;

export const getUser = Get(
  "User",
  _User,
  Property,
  _User,
  getRelations("user")
);



@Resolver()
export class UserQueryResolver {
  // @Query(() => _User)
  // async userById(@Arg("userId") userId: string) {
  //   const userRepository = getRepository(_User);
  //   const user = await userRepository.findOne(userId, {
  //     relations: ["profile", "userRoles"],
  //   });
  //   return user;
  // }

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
