import { Resolver, Query ,Arg} from "type-graphql";
import { _User } from "../../database/entities/_users";


@Resolver()
export class queryResolver {

  @Query(() => _User )
  async testById(@Arg("userId") id: string) {
    console.log(id)
    const user =  await _User.findOne(id,{ relations: ["profile"] });
    if(user!=null){
      console.log(user);
      return user
      
    }
    return new _User();

  }

}
