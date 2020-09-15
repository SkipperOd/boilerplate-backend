import { InputType, Field } from "type-graphql";
import { BaseInput } from "../../../../src/modules/common/input/property";

@InputType({ description: "permission" })
export class PermissionsInput extends BaseInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  write: boolean;

  @Field({ nullable: true })
  read: boolean;
}

// @InputType({ description: "permission" })
// export class PermissionsUpdateInput extends BaseInput {
//   @Field()
//   permission: PermissionsInput;
// }
