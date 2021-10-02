import User, { IUser } from '../models/User';

export default function getAllUsers(): Promise<User[]> {
  return User.findAll();
}
