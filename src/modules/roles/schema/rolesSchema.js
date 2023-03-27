const { buildSchema } = require("graphql");

const rolesSchema = buildSchema(`
    type Role {
        id: ID!
        name: String!
    }

    type Query {
        roles: [Role]!
    }

`);

module.exports = rolesSchema;
