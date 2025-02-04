import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { games, reviews } from "./data.js";
import { typeDefs } from "./schema.js";


const resolvers = {
    Query: {
        games: () => games,
        game: (_, args) => {
            const { id } = args;
            return games.find((item) => item.id == id);
        },
        reviews: () => reviews,
        review: (_, args) => {
            const { id } = args;
            return reviews.find((item) => item.id === id);
        }
    },

    Game: {
        reviews: (parent) => {
            return reviews.filter((r) => r.game_id == parent.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);
