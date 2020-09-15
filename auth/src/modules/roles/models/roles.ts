import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { BaseInput } from "../../../../src/modules/common/input/property";


@InputType({ description: "Roles" })
export class RolesInput  extends BaseInput{

  @Field()
  @Length(2,10)
  name: string;

}
