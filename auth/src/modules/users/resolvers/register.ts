import { Resolver, Mutation, Arg } from "type-graphql";
import bcript from "bcryptjs";
import { _User } from "../../../database/entities/_users";
import { RegistrationInput } from "../models/registration";
import { _Profile } from "../../../database/entities/_profiles";
import { getManager } from "typeorm";
// import { creatConfirmationalUrl } from "../../../utilities/email/createConfirmationUrl";
// import { emailSender } from "../../../utilities/email/sender";
// import { template } from "../../../constants/email/userVerificationTemplate";
// import { subjects } from "../../../constants/email/subject";


@Resolver()
export class RegisterMutationResolver {
  @Mutation(() => _User)
  async register(@Arg("data") person: RegistrationInput) {
    const hashedpassword = await bcript.hash(person.password, 12);
    const profile = new _Profile();
    const user = new _User();
    profile.imageUrl = person.profile.imageUrl;
    const netprofile = await getManager()
      .connection.createEntityManager()
      .save(profile);

    user.email = person.email;
    user.firstName = person.firstName;
    user.gender = person.gender;
    user.lastName = person.lastName;
    user.userName = person.userName;
    user.password = hashedpassword;
    user.profile = netprofile;
    const User = await getManager().connection.createEntityManager().save(user);
    // await emailSender(
    //   User.email,
    //   template(creatConfirmationalUrl(User.id)),
    //   subjects.emailVerification
    // );

    return User;
  }
}
