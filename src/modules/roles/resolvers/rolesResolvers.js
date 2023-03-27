const { faker } = require("@faker-js/faker");

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
};

module.exports = rolesResolvers;
