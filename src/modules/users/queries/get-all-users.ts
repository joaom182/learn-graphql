import User, { IUser } from '../models/User';

export default function getAllUsers(): Promise<IUser[]> {
  return User.findAll();
}
