import User, { IUser } from '../models/User';

export default function getUserById(id: number): Promise<IUser | null> {
  return User.findOne({ where: { id: id } });
}
