import { Resolver, Query } from "type-graphql";
import { _User } from "../../../entities/tables/_users";


@Resolver()
export class UserResolver {

  @Query(() => [_User])
  async User() {
    return await _User.find();
  }

}
