import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Mutation } from "./resolvers/Mutation.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },

  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

mongoose.connect(process.env.MONGO_URL, { UseNewUrlParser: true }).then(() => {
  console.log("sucessful connection to mongodb");
});

await server.start();

app.use(
  "/graphql",
  cors({
    origin: [
      "https://time-tracker-client-production.up.railway.app",
      "http://localhost:5173",
      "https://time-tracker-server-production.up.railway.app/graphql",
    ],
  }),
  bodyParser.json(),
  expressMiddleware(server)
);

await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
