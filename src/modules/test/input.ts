import { InputType, Field } from "type-graphql";

@InputType({ description: "testing" })
export class Profile {
    @Field()
    imageUrl: string;

}

@InputType({ description: "testing" })
export class inputValues {
    @Field()
    password: string;
    
    @Field()
    email: string;

    @Field()
    userName: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    gender: string;

    @Field()
    profile: Profile;


}
