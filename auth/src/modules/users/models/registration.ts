import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { IsEmailAlreadyExist } from "../../../utilities/validations/emailExists";
import { IsUserNameAlreadyExist } from "../../../utilities/validations/userNameExists";
import { GetStatusText } from "../../../constants/responses/responsCode"
import { ProfileInput } from "./profile";
import { BaseInput } from "../../../../src/modules/common/input/property";

@InputType({ description: "Register new user" })
export class RegistrationInput extends BaseInput{
  @Field()
  @Length(6,20)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;


  @Field()
  @Length(6,20)
  confirmPassword: string;


  @Field()
  @Length(2,10)
  @IsUserNameAlreadyExist({message:GetStatusText('305')})
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
  @Length(4,6)
  gender: string;

  @Field()
  profile:ProfileInput;
 

}