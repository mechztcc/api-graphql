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

    input UserCreate {
        name: String!, 
        second_name: String!, 
        password: String!
        email: String!, 
        birth: String!, 
        payment: String!, 
        vip: Boolean, 
        role: Int!
    }

    type Query {
        users: [User]!
        user(id: ID!): User
    }

    type Mutation {
        create(data: UserCreate!): User
        delete(id: ID!): [User]
    }
`);

module.exports = userSchema;
