import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { merge } from 'lodash';

import userResolvers from '~modules/users/graphql/resolvers';

const Root = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export const typeDefs: DocumentNode[] = [Root];
export const resolvers = merge({}, userResolvers);
