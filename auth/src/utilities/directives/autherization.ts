import { SchemaDirectiveVisitor } from "apollo-server-express";
import { GraphQLObjectType } from "graphql";

export class autherization extends SchemaDirectiveVisitor {
  visitObject(object: GraphQLObjectType) {
    console.log(object);
  
  }
}
