import { Resolver, Mutation, Arg } from "type-graphql";
import { redis } from "../../../redis";
import { _User } from "../../../database/entities/_users";
import { registerConfirmation } from "../../../constants/prefixes";

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean, { nullable: true })
  async confirmUser(@Arg("token") token: string): Promise<Boolean> {
    const user = await redis.get(registerConfirmation + token);

    if (user == null) return false;

    await _User.update({ id: user }, { confirmed: true });
    await redis.del(registerConfirmation + token);
    return true;
  }
}
