import User, { IUser } from '../models/User';

export default function insertUser(user: IUser): Promise<User> {
  return User.create(user);
}
