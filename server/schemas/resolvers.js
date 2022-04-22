const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;


// resolvers.js: Define the query and mutation functionality to work with the Mongoose models.