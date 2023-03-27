const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const resolvers = require("./setup/resolver");
const typeDefs = require("./setup/schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: "aaaa",
});

startStandaloneServer(server, {
  context: ({ req }) => {
    return {
      userOptions: req.headers.user || "",
    };
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
