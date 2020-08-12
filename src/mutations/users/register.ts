import { Resolver, Mutation, Arg } from "type-graphql";
import bcript from "bcryptjs";
import { _User } from "../../entity/tables/_users";
import { RegistrationInput } from "../../models/users/registration";
// import { IsAuthenticated } from "../middleware/isAuth";

// import { emailSender } from "../../utility/EmailSender";
// import { creatConfirmationalUrl } from "../../utility/creatConfirmationalUrl";

@Resolver()
export class RegisterResolver {
//   @UseMiddleware(IsAuthenticated)
//   @Query(() => [User])
//   async User() {
//     return await User.find();
//   }

  @Mutation(() => _User)
  async register(@Arg("data") person: RegistrationInput) {
    const hashedpassword = await bcript.hash(person.password, 12);
    const user = new _User();
    user.email = person.email
    user.firstName = person.firstName
    user.gender = person.gender
    user.lastName = person.lastName
    user.userName = person.userName
    user.password = hashedpassword
    return await _User.create(user).save();

  }
}
