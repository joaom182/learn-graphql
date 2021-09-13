/**
 * @jest-environment ./src/configs/jest-environment
 */

import { Options } from 'sequelize/types';
import app from '~/app';
import dbOptions from '~configs/database';
import { connect } from '~database/connection';

describe('User resolvers', () => {
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
