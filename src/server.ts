import { config } from 'dotenv';
config();
import { Options } from 'sequelize/types';
import dbOptions from '~configs/database';
import { connect } from '~database/connection';
import app from './app';
const port = process.env.PORT || 5002;

connect(dbOptions as Options);
app
  .listen({ port })
  .then(() => console.log(`Server is running on port :${port}`));
