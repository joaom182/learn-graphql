import { DataTypes, Model, ModelAttributes, Sequelize } from 'sequelize';
import { Field, ID, ObjectType } from 'type-graphql';

export const UserAttributes: ModelAttributes<User> = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
};

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  age?: number;
  created_at?: Date;
  updated_at?: Date;
}

@ObjectType()
class User extends Model implements IUser {
  @Field(() => ID)
  public id!: number;

  @Field({ nullable: true })
  public name!: string;

  @Field({ nullable: true })
  public email!: string;

  @Field({ nullable: true })
  public age!: number;

  @Field({ nullable: true })
  public readonly created_at!: Date;

  @Field({ nullable: true })
  public readonly updated_at!: Date;

  static setup(sequelize: Sequelize) {
    this.init(UserAttributes, {
      sequelize,
    });
  }
}

export default User;
