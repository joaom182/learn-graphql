import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    users: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: String!
  }
`;
