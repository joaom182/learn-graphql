import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from '~graphql';

const app = new ApolloServer({
  typeDefs,
  resolvers,
});

export default app;
