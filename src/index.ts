import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { createConnection } from "typeorm";

import { MetaData } from "../src/modules/index";

import connectRedis from "connect-redis";
import session from "express-session";
import { redis } from "./redis";
import cors from "cors";

import { Config } from "./constants/config/config";

const main = async () => {
  await createConnection();

  console.log(Config);
  const schema = await MetaData;

  //to access request object in our resolver to access session data
  //apollo server give us access to request object we can pass that object to our app context
  //and from there we can access session data based on the client request.
  //context is made avalible from any resolver

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }: any) => ({
      req,
    }),
    
  });

  const app = Express();
  // add cors to our application
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );

  // setting up redis to store cookie with our use sessions
  const RedisStore = connectRedis(session);
  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "qid",
      secret: Config.sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: Config.envrionment === "Production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    })
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000/graphql");

  });
};

main();
