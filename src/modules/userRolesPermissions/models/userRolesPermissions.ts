import { InputType, Field } from "type-graphql";
import { BaseInput } from "../../../../src/modules/common/input/property";

@InputType({ description: "User Roles" })
export class UserRolesPermissionsInput extends BaseInput{
  @Field()
  name: string;

  @Field()
  permissionId: string;
  
  @Field()
  userRoleId: string;
}
