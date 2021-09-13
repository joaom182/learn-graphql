import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    users: [User]
  }

  extend type Mutation {
    insert_user(payload: UserInput!): User
  }

  type User {
    id: Int
    name: String!
    email: String!
    age: Int!
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
  }
`;
