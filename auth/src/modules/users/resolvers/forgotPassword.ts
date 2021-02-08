import { Resolver, Mutation, Arg } from "type-graphql";
import { _User } from "../../../database/entities/_users";

// import { GetStatusText } from "../../../constants/responses/responsCode";
// import { emailSender } from "../../../utilities/email/sender";
// import { template } from "../../../constants/email/forgotPasswordTemplate";
// // import { creatForgotPasswordUrl } from "../../../utilities/email/createConfirmationUrl";
// import { subjects } from "../../../constants/email/subject";

@Resolver()
export class ForgotPasswordMutationResolver {
  @Mutation(() => Boolean, { nullable: true })
   async forgotPassword(@Arg("email") email: string): Promise<Boolean> {
     console.log(email)
  //   const User = await _User.findOne({ where: { email: email } });

  //   if (!User) {
  //     throw new Error(GetStatusText("210"));
  //   }
  //   await emailSender(
  //     User.email,
  //     template(creatForgotPasswordUrl(User.id)),
  //     subjects.forgetPassword
  //   );

    return true;
  }
}
