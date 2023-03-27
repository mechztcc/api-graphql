const usersResolvers = require("../../modules/users/resolvers/userResolvers");
const rolesResolvers = require("../../modules/roles/resolvers/rolesResolvers");

const resolvers = [usersResolvers, rolesResolvers];

module.exports = resolvers;
