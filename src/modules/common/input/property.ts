import { Field, InputType } from "type-graphql";

@InputType()
export class Property {
  @Field({ nullable: true, description: "TODO" })
  id: string;

  @Field({ nullable: true, description: "TODO" })
  name: string;
}

@InputType()
export class BaseInput {
  @Field({ nullable: true, description: "TODO" })
  id: string;
}
