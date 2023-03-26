const { faker } = require("@faker-js/faker");

const users = [
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
    create(_, { name, second_name, email, birth, payment, vip, profile }) {
      const user = {
        id: faker.random.numeric(),
        name,
        second_name,
        email,
        birth,
        payment,
        vip,
        profile,
      };
      users.push(user);
      return user;
    },
  },
};

module.exports = usersResolvers;
