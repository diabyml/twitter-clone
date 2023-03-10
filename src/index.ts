require("dotenv").config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import http from "http";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";

// for session, go back to odl playground
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import app from "./app";
import { MyContext } from "./utils/context";
import { HelloResolver } from "./resolvers/hello.resolver";

const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

const main = async () => {
  const server = http.createServer(app);
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({ req, res, prisma }),
    // enable this to get caching work properly
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        // options
      }),
    ],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: true });

  server.listen(PORT, () =>
    console.log(`Listening on http://localhost:${PORT}/graphql`)
  );
};

main().catch((err) => console.log(`An error occured: ${err}`));
