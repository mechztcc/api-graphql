const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { faker } = require("@faker-js/faker");
const resolvers = require("./resolver");
const typeDefs = require("./schema");

const users = [];
const profiles = [];


const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server).then(({ url }) => {
  for (let index = 0; index < 10; index++) {
    users.push({
      id: faker.random.numeric(),
      name: faker.name.firstName(),
      second_name: faker.name.firstName(),
      email: faker.internet.email(),
      birth: faker.date.recent().toDateString(),
      payment: faker.commerce.price(),
      vip: false,
      createdAt: new Date().toDateString(),
      profile: 2,
    });
  }

  profiles[0] = {
    id: 1,
    name: "Teacher",
  };

  profiles[1] = {
    id: 2,
    name: "Student",
  };
  console.log(`🚀 Server ready at ${url}`);
});
