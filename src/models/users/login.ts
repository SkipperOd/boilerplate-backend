import { InputType, Field } from "type-graphql";
import {IsEmail } from "class-validator";

@InputType({ description: "Login user" })
export class LoginInput {
  @Field()
  password: string;

  @Field()
  @IsEmail()
  email: string;
}