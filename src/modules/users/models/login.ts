import { InputType, Field } from "type-graphql";
import {IsEmail, Length } from "class-validator";

@InputType({ description: "Login user" })
export class LoginInput {
  @Field()
  @Length(6,20)
  password: string;

  @Field()
  @IsEmail()
  email: string;
}