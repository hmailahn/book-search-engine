// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
  }
  `;

// export the typeDefs
module.exports = typeDefs;



// typeDefs.js: Define the necessary Query and Mutation types:

// Query type:
//       me: Which returns a User type.



// Mutation type:
    // login: Accepts an email and password as parameters; returns an Auth type.

    // addUser: Accepts a username, email, and password as parameters; returns an Auth type.

    // saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

    // removeBook: Accepts a book's bookId as a parameter; returns a User type.




// Book type:
    // bookId (Not the _id, but the book's id value returned from Google's Book API.)

    // authors (An array of strings, as there may be more than one author.)

    // description

    // title

    // image

    // link


// Auth type:

    // token
    
    // user (References the User type.)   