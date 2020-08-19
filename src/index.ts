import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { createConnection } from "typeorm";

import { MetaData } from "../src/modules/index";

import connectRedis from "connect-redis";
import session from "express-session";
import { redis } from "./redis";

import { Config } from "./constants/config";

const main = async () => {
  await createConnection();
  const config = new Config();

  console.log(config)
  const schema = await MetaData;

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  const RedisStore = connectRedis(session);
  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "qid",
      secret: config.sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: config.envrionment === "Production",
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
