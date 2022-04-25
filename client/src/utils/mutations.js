import { gql } from '@apollo/client';

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD_USER will execute the addUser mutation.

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql `
mutation saveBook($bookId: String!, $authors: [String], $description: String!, $title: String, $image: String, $link: String!) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image) {
       user {
           _id
           username
       } 
    }
}
`;

export const REMOVE_BOOK = gql `
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        user {
            _id
            username
        }
    }
}
`;

