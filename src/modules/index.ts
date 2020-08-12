import { buildSchema } from "type-graphql";


//queries
import { UserResolver } from "../modules/users/queries/user"

//mutation
import { RegisterResolver } from "../modules/users/mutatons/register"

export const MetaData = buildSchema({
    resolvers: [RegisterResolver, UserResolver]
});
