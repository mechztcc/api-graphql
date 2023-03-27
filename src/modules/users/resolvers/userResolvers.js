const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

let users = [
  {
    id: 1,
    name: faker.name.firstName(),
    second_name: faker.name.firstName(),
    email: faker.internet.email(),
    birth: faker.date.recent().toDateString(),
    payment: faker.commerce.price(),
    vip: false,
    createdAt: new Date().toDateString(),
    profile: 2,
  },
  {
    id: faker.random.numeric(),
    name: faker.name.firstName(),
    second_name: faker.name.firstName(),
    email: faker.internet.email(),
    birth: faker.date.recent().toDateString(),
    payment: faker.commerce.price(),
    vip: false,
    createdAt: new Date().toDateString(),
    profile: 1,
  },
  {
    id: faker.random.numeric(),
    name: faker.name.firstName(),
    second_name: faker.name.firstName(),
    email: faker.internet.email(),
    birth: faker.date.recent().toDateString(),
    payment: faker.commerce.price(),
    vip: false,
    createdAt: new Date().toDateString(),
    profile: 1,
  },
  {
    id: faker.random.numeric(),
    name: faker.name.firstName(),
    second_name: faker.name.firstName(),
    email: faker.internet.email(),
    birth: faker.date.recent().toDateString(),
    payment: faker.commerce.price(),
    vip: false,
    createdAt: new Date().toDateString(),
    profile: 2,
  },
];

const profiles = [
  {
    id: 1,
    name: faker.word.adjective(),
  },
  {
    id: 2,
    name: faker.word.adjective(),
  },
];

const usersResolvers = {
  User: {
    profile(user) {
      const profile = profiles.find((el) => el.id == user.profile);
      return profile.name;
    },
    createdAt() {
      return new Date().toDateString();
    },
  },

  Query: {
    users() {
      return users;
    },

    user(_, { id }) {
      return users.find((el) => el.id == id);
    },
  },

  Mutation: {
    async create(_, { data }) {
      const { name, second_name, email, birth, payment, vip, role } = data;

      const roleExists = await prisma.roles.findUnique({ where: { id: role } });

      const user = prisma.users.create({
        data: {
          name,
          second_name,
          email,
          birth,
          payment,
          vip,
          rolesId: roleExists.id,
        },
      });

      return user;
    },

    delete(_, { id }) {
      const user = users.some((el) => el.id == id);
      if (!user) {
        throw new Error("User not found.");
      }
      users = users.filter((el) => el.id != id);
      return users;
    },
  },
};

module.exports = usersResolvers;
