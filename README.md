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

# Integration tests for resolvers + database

resolvers.spec.ts
```ts
/**
 * @jest-environment ./src/configs/jest-environment
 */

import { Options } from 'sequelize/types';
import app from '~/app';
import dbOptions from '~configs/database';
import { connect } from '~database/connection';

describe('User resolvers', () => {
  // Connect to a SQLITE test database. See jest-environment.js file to more details.
  beforeAll(async () => {
    await connect(dbOptions as Options);
  });

  it('should query all users', async () => {
    const response = await app.executeOperation({
      query: `
        query GetAllUsers {
          users {
            id
            age
            email
            name
          }
        }
      `,
    });
    expect(response.data?.users).toBeTruthy();
    expect(response.errors).toBeUndefined();
  });
});
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