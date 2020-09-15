import { InputType, Field } from "type-graphql";
import { BaseInput } from "../../common/input/property";

@InputType({ description: "User Roles" })
export class RolesPermissionsInput extends BaseInput{

  @Field()
  permissionId: string;
  
  @Field()
  roleId: string;
}
