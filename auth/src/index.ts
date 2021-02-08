import "reflect-metadata";
import { ApolloServer, SchemaDirectiveVisitor } from "apollo-server-express";
import Express from "express";
import { createConnection } from "typeorm";

import { MetaData } from "../src/modules/index";
import cookieParser from "cookie-parser";
// import connectRedis from "connect-r edis";
// import session from "express-session";
// import { redis } from "./redis";
import cors from "cors";

import { Config } from "./constants/config/config";
import { autherization } from "./utilities/directives/autherization";
// import { verify } from "jsonwebtoken";
var process = require("process");
const main = async () => {
  await createConnection();
  const schema = await MetaData;

  //to access request object in our resolver to access session data
  //apollo server give us access to request object we can pass that object to our app context
  //and from there we can access session data based on the client request.
  //context is made avalible from any resolver

  SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
    auth: autherization,
  });

  const apolloServer = new ApolloServer({
    schema,
    
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
  });

  const app = Express();
  // add cors to our application
  app.use(
    cors({
      credentials: true,
      origin: `http://localhost:${Config.frontendPort}`,
    })
  );

  // setting up redis to store cookie with our use sessions
  // const RedisStore = connectRedis(session);

  app.use(cookieParser());

  apolloServer.applyMiddleware({
    app,
  });

  app.listen(Config.backendPort, () => {
    console.log(
      `Server started on http://localhost:${Config.backendPort}/graphql`,
      `${process.pid}`
    );
  });
};

main();
