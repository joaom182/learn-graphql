import { DocumentNode } from 'graphql';
import { merge } from 'lodash';

import Root from './typeDefs/Root';
import rootResolvers from './resolvers/root';

import User from './typeDefs/User';
import userResolvers from './resolvers/user';

export const typeDefs: DocumentNode[] = [Root, User];
export const resolvers = merge(rootResolvers, userResolvers);
