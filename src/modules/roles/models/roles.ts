import { InputType, Field } from "type-graphql";


@InputType({ description: "Roles" })
export class RolesInput {

  @Field()
  name: string;

}
