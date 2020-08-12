import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { IsEmailAlreadyExist } from "../../../utilities/validations/emailExists";
import { GetStatusText } from "../../../constants/respons_code"

@InputType({ description: "Register new user" })
export class RegistrationInput {
  @Field()
  password: string;

  @Field()
  userName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: GetStatusText('304') })
  email: string;

  @Field()
  @Length(1, 10)
  firstName: string;

  @Field()
  @Length(1, 10)
  lastName: string;

  @Field()
  gender: string;
}