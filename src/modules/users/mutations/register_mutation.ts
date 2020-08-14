import { Resolver, Mutation, Arg } from "type-graphql";
import bcript from "bcryptjs";
import { _User } from "../../../database/entities/_users";
import { RegistrationInput } from "../models/registration";
import { _Profile } from "../../../../src/database/entities/_profiles";
import { getManager } from "typeorm";
// import { IsAuthenticated } from "../middleware/isAuth";

// import { emailSender } from "../../utility/EmailSender";
// import { creatConfirmationalUrl } from "../../utility/creatConfirmationalUrl";

@Resolver()
export class RegisterMutationResolver {
  //   @UseMiddleware(IsAuthenticated)
  //   @Query(() => [User])
  //   async User() {
  //     return await User.find();
  //   }

  @Mutation(() => _User)
  async register(@Arg("data") person: RegistrationInput) {
    const hashedpassword = await bcript.hash(person.password, 12);
    const profile = new _Profile()
    const user = new _User()
    profile.imageUrl = person.profile.imageUrl;
    const netprofile = await getManager().connection.createEntityManager().save(profile)
    
    user.email = person.email
    user.firstName = person.firstName
    user.gender = person.gender
    user.lastName = person.lastName
    user.userName = person.userName
    user.password = hashedpassword
    user.profile = netprofile
    const User =  await getManager().connection.createEntityManager().save(user)

    console.log(User)

    return User
  }
}
