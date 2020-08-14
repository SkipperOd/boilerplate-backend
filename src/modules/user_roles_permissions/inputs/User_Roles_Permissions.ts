import { InputType, Field } from "type-graphql";

@InputType({ description: "User Roles" })
export class UserRolesPermissionsInput {
  @Field()
  name: string;

  @Field()
  permissionId: string;
  
  @Field()
  userRoleId: string;
}
