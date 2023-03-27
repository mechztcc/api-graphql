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

  Mutation: {
    createRole(_, { name }) {
      const role = {
        id: faker.random.numeric(),
        name,
      };

      roles.push(role);
      return role;
    },
  },
};

module.exports = rolesResolvers;
