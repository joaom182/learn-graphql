import { IUser } from '../models/User';
import insertUser from '../mutations/insert-user';
import getAllUsers from '../queries/get-all-users';

export default {
  Query: {
    users: (): Promise<IUser[]> => {
      return getAllUsers();
    },
  },
  Mutation: {
    insert_user: (_: any, { payload }: { payload: IUser }): Promise<IUser> => {
      return insertUser(payload);
    },
  },
};
