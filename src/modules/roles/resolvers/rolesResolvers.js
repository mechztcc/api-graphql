const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const roles = [
  {
    id: 1,
    name: faker.word.adjective(),
  },
  {
    id: 2,
    name: faker.word.adjective(),
  },
];

const rolesResolvers = {
  Query: {
    roles() {
      return roles;
    },
  },

  Mutation: {
    createRole(_, { name }) {
      const role = prisma.roles.create({
        data: { name, createdAt: new Date().toISOString() },
      });
      return role;
    },
  },
};

module.exports = rolesResolvers;
