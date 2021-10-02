import { Identifier } from 'sequelize/types';
import User, { IUser } from '../models/User';

export default async function updateUser(
  id: Identifier,
  payload: IUser
): Promise<User | never> {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User does not exist');
  }
  return user.update(payload);
}
