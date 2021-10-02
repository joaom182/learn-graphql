import User, { IUser } from '../models/User';

export default function getUserById(id: number): Promise<User | null> {
  return User.findOne({ where: { id: id } });
}
