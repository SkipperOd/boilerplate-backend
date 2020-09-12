import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { BaseInput } from "../../../../src/modules/common/input/property";

@InputType({ description: "permission" })
export class PermissionsInput extends BaseInput {
  @Field({ nullable: true })
  @Length(2, 20)
  name: string;
}

// @InputType({ description: "permission" })
// export class PermissionsUpdateInput extends BaseInput {
//   @Field()
//   permission: PermissionsInput;
// }
