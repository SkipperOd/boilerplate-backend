import { InputType, Field } from "type-graphql";


@InputType({ description: "permission" })
export class PermissionsInput {

  @Field()
  name: string;

}
