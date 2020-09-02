import { Resolver, Mutation, Arg } from "type-graphql";
import { _User } from "../../../database/entities/_users";

import { GetStatusText } from "../../../../src/constants/responses/responsCode";
import { emailSender } from "../../../../src/utilities/email/sender";
import { template } from "../../../../src/constants/email/forgotPasswordTemplate";
import { creatForgotPasswordUrl } from "../../../../src/utilities/email/create_confirmation_url";
import { subjects } from "../../../../src/constants/email/subject";

@Resolver()
export class ForgotPasswordMutationResolver {
  @Mutation(() => Boolean, { nullable: true })
  async forgotPassword(@Arg("email") email: string): Promise<Boolean> {
    const User = await _User.findOne({ where: { email: email } });

    if (!User) {
      throw new Error(GetStatusText("210"));
    }
    await emailSender(
      User.email,
      template(creatForgotPasswordUrl(User.id)),
      subjects.forgetPassword
    );

    return true;
  }
}
