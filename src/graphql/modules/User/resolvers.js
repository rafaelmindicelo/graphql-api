const userService = require("../../../services/UserService");

module.exports = {  
  Query: {
    users: async (_, { last_name }) => await userService.listUsers(last_name),

    user: async (_, { filter }) => await userService.listUser(filter) 
  },
  
  Mutation: {
    createUser: async (_, { data }) => await userService.createUser(data),

    updateUser: async (_, { id, data }) => await userService.updateUser(id, data),

    deleteUser: (_, { filter }) => userService.deleteUser({filter})
    
  }
};
