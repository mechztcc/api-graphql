const { mergeSchemas } = require("@graphql-tools/schema");
const userSchema = require("./users/schema/userSchema");

const typeDefs = mergeSchemas({ schemas: [userSchema] });

module.exports = typeDefs;
