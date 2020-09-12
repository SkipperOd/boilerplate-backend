import { InputType, Field } from "type-graphql";
import { BaseInput } from "../../../../src/modules/common/input/property";

@InputType({ description: "User Roles" })
export class UserRolesInput extends BaseInput{

  @Field()
  userId: string;
  
  @Field()
  roleId: string;


}
