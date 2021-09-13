import User, { IUser } from '../models/User';

export default function insertUser(user: IUser): Promise<IUser> {
  return User.create(user);
}
