const usersResolvers = {
  Query: {
    users() {
      return [{
        id: 1,
        name: "Alberto",
        email: "email@email.com",
        password: "123456",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      }];
    },
  },
};

module.exports = usersResolvers;
