# Installing

```
yarn add apollo-server graphql
```

# Initializing Apollo Server

app.ts
```ts
import { ApolloServer } from 'apollo-server';

const app = new ApolloServer({
  typeDefs: [...],
  resolvers: {...},
});

export default app;
```

server.ts
```ts
import app from './app';
const port = process.env.PORT || 5002;

app
  .listen({ port })
  .then(() => console.log(`Server is running on port :${port}`));
```

# Tooling

## Eslint with GraphQL

Install `eslint-plugin-graphql`
```
yarn add eslint-plugin-graphql -D
```

Change configuration of your .eslintrc.json
```ts
module.exports = {
  rules: {
    "graphql/template-strings": ['error', {
      env: 'apollo',
      // Import your schema JSON here
      schemaJson: require('./schema.json'),
    }]
  },
  plugins: [
    'graphql'
  ]
}
```


# Useful links
- [Modularizing your GraphQL schema code](https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/)
- [apollo-tooling](https://github.com/apollographql/apollo-tooling)