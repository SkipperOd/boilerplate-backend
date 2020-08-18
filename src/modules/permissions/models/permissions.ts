import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";


@InputType({ description: "permission" })
export class PermissionsInput {

  @Field()
  @Length(2,10)
  name: string;

}
