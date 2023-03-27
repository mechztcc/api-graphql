const { mergeSchemas } = require("@graphql-tools/schema");
const userSchema = require("../../modules/users/schema/userSchema");
const rolesSchema = require("../../modules/roles/schema/rolesSchema");

const typeDefs = mergeSchemas({ schemas: [userSchema, rolesSchema] });

module.exports = typeDefs;
