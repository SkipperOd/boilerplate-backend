import { InputType, Field } from "type-graphql";

@InputType({ description: "profile" })
export class ProfileInput {
    @Field()
    imageUrl: string;

}
