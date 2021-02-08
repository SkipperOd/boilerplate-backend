import { Resolver, Mutation, Arg } from "type-graphql";
import { _User } from "../../../database/entities/_users";
// import { redis } from "../../../redis";
// import { GetStatusText } from "../../../constants/responses/responsCode";
// import { changePassword } from "../../../constants/prefixes";
import { ChangePasswordInput } from "../models/changePassword";
// import bcript from "bcryptjs";
// import { getManager } from "typeorm";
@Resolver()
export class ChangePasswordMutationResolver {
  @Mutation(() => Boolean)
  async changePassword(
    @Arg("data") data: ChangePasswordInput
  ): Promise<Boolean> {
    console.log(data)
    // const user = await redis.get(changePassword + data.token);

    // const User = await _User.findOne({ where: { id: user } });

    // if (!User) {
    //   throw new Error(GetStatusText("205"));
    // }

    // User.password = await bcript.hash(data.password, 12);
    // if (await !getManager().connection.createEntityManager().save(User)) {
    //   throw new Error(GetStatusText("105"));
    // }
    return true;
  }
}
