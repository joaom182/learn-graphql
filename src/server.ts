import { Options } from 'sequelize/types';
import { connect } from '~database/connection';
import app from './app';
import dbOptions from '~configs/database';
const port = process.env.PORT || 5002;

export default {
  init: () => {
    connect(dbOptions as Options);
    app
      .listen({ port })
      .then(() => console.log(`Server is running on port :${port}`));
  },
};
