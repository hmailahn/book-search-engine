const { User, Book} = require('../models')

const resolvers = {
    // Query: {
    //     books: async () => {
    //       return Book.find().sort({ createdAt: -1 });
    //     }
    //   }

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
        // login: async () => {

        // }
    }
  };
  
  module.exports = resolvers;


// resolvers.js: Define the query and mutation functionality to work with the Mongoose models.