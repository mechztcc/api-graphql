const { buildSchema } = require("graphql");

const userSchema = buildSchema(`

    type User {
        id: ID!
        name: String!
        email: String!
        profile: String!
        password: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        users: [User]
    }
`);

module.exports = userSchema;
