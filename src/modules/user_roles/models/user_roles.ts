import { InputType, Field } from "type-graphql";

@InputType({ description: "User Roles" })
export class UserRolesInput {

  @Field()
  userId: string;
  
  @Field()
  roleId: string;


}
