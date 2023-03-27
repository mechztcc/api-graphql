const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const argon2 = require("argon2");

const prisma = new PrismaClient();

const usersResolvers = {
  User: {
    async profile(user) {
      const profile = await prisma.roles.findUnique({ where: { id: user.id } });
      return profile.name;
    },
    createdAt(user) {
      return new Date(user.createdAt).toDateString();
    },
  },

  Query: {
    users() {
      const users = prisma.users.findMany();
      return users;
    },

    user(_, { id }) {
      const user = prisma.users.findUnique({ where: { id: Number(id) } });
      return user;
    },
  },

  Mutation: {
    async create(_, { data }) {
      const { name, second_name, email, password, birth, payment, vip, role } =
        data;

      const hashedPass = await argon2.hash("password");

      const roleExists = await prisma.roles.findUnique({ where: { id: role } });

      const user = prisma.users.create({
        data: {
          name,
          second_name,
          email,
          password: hashedPass,
          birth,
          payment,
          vip,
          rolesId: roleExists.id,
        },
      });

      return user;
    },

    async delete(_, { id }) {
      await prisma.users.delete({ where: { id: Number(id) } });
      const users = prisma.users.findMany();
      return users;
    },
  },
};

module.exports = usersResolvers;
