import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType({ description: "Register new user" })
export class ChangePasswordInput {
  @Field()
  @Length(6,20)
  password: string;

  @Field()
  @Length(6,20)
  confirmPassword: string;

  @Field()
  token: string;

}