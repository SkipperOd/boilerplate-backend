import { Resolver, Mutation, Arg } from "type-graphql";
import { _User } from "../../database/entities/_users";
import { inputValues } from "./input";
import { _Profile } from "../../../src/database/entities/_profiles";
// import { IsAuthenticated } from "../middleware/isAuth";

// import { emailSender } from "../../utility/EmailSender";
// import { creatConfirmationalUrl } from "../../utility/creatConfirmationalUrl";

@Resolver()
export class TestMutationResolver {
  @Mutation(() => _User)
  async test(
    @Arg("data") iv: inputValues
    ): Promise<_User | null>  {
    
    const profile = new _Profile()
    profile.imageUrl=iv.profile.imageUrl;
    await _Profile.create(profile).save()
    const user = new _User();
    user.firstName = iv.firstName
    user.lastName = iv.lastName
    user.userName = iv.userName
    user.gender=iv.gender
    user.email = iv.email
    user.password = iv.password
    // user.profile = profile
    const User =  await _User.create(user).save();
    console.log(User)
    return User;

  }
}
