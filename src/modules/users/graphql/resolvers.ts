import { Identifier } from 'sequelize/types';
import {
  Arg,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import User, { IUser } from '../models/User';
import insertUser from '../mutations/insert-user';
import updateUser from '../mutations/update-user';
import getAllUsers from '../queries/get-all-users';
import getUserById from '../queries/get-user-by-id';

@InputType()
export class UserInput implements IUser {
  @Field()
  public name: string = '';

  @Field()
  public email: string = '';

  @Field()
  public age: number = 0;
}
@Resolver(User)
class UserResolver {
  @Query(() => [User!]!)
  users(): Promise<IUser[]> {
    return getAllUsers();
  }

  @Query(() => User, { nullable: true })
  async user(
    @Arg('id', () => ID!)
    id: number
  ): Promise<IUser | null> {
    return getUserById(id);
  }

  @Mutation(() => User)
  insert_user(
    @Arg('payload', () => UserInput!) payload: UserInput
  ): Promise<IUser> {
    return insertUser(payload);
  }

  @Mutation(() => User, { nullable: true })
  update_user(
    @Arg('id', () => ID!) id: Identifier,
    @Arg('payload', () => UserInput!) payload: UserInput
  ): Promise<IUser | null> {
    return updateUser(id, payload);
  }
}

export default UserResolver;
