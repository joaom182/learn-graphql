import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { merge } from 'lodash';

import userResolvers from '~modules/users/graphql/resolvers';
import User from '~modules/users/graphql/type-defs';

const Root = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export const typeDefs: DocumentNode[] = [Root, User];
export const resolvers = merge({}, userResolvers);
