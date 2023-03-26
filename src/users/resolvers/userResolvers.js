const { faker } = require("@faker-js/faker");

const users = [
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
      const profile = profiles.find((el) => el.id == user.id);
      return profile.name;
    },
  },

  Query: {
    users() {
      return users;
    },
  },
};

module.exports = usersResolvers;
