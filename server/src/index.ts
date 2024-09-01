import express from "express"
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { typeDefs } from "./graphql/typeDef";
import { resolvers } from "./graphql/resolver";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
    const {url} = await startStandaloneServer(server, {listen: {port: 4000}});
    console.log(`🚀  Server ready at: ${url}`);
}

app.listen(PORT, async () => {
    await startServer();
    console.log(`Server is running on port ${PORT}`);
});