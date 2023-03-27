const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const rolesResolvers = {
  Query: {
    async roles() {
      const roles = await prisma.roles.findMany();
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
