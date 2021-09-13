import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    questions: [Question]
  }

  type Question {
    id: ID!
    text: String!
    type: String!
  }
`;
