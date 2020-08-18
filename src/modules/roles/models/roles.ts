import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";


@InputType({ description: "Roles" })
export class RolesInput {

  @Field()
  @Length(2,10)
  name: string;

}
