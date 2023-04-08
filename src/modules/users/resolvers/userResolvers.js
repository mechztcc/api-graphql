const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const secrets = require("../../../setup/secrets/index");

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
      console.log(data);
      const { name, second_name, email, password, birth, payment, vip, role } =
        data;

      const hashedPass = await argon2.hash(password);

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

    async delete(_, { id }, { userOptions }, info) {
      const token = userOptions;

      if (!token) {
        throw Error("Authorization has been needed");
      }

      const { sub } = jwt.verify(token, secrets.hash);

      await prisma.users.findUniqueOrThrow({
        where: { id: Number(id) },
      });

      await prisma.users.delete({ where: { id: Number(id) } });
      const users = prisma.users.findMany();
      return users;
    },

    async auth(parent, { email, password }, { userOptions }, info) {
      const userExists = await prisma.users.findUnique({ where: { email } });

      if (!userExists) {
        throw Error("User not found");
      }

      const verify = await argon2.verify(userExists.password, password);
      if (!verify) {
        throw Error("Invalid Password / E-mail combination");
      }

      const token = jwt.sign({}, secrets.hash, {
        subject: String(userExists.id),
        expiresIn: "2d",
      });

      return { token };
    },
  },
};

module.exports = usersResolvers;
