import { ApolloServer } from 'apollo-server';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import UserResolver from './modules/users/graphql/resolvers';

async function app() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  return new ApolloServer({
    schema,
  });
}

export default app;
