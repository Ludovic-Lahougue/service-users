import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';


type UserProperties = Required<User>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

@Entity()
@ObjectType({ description: 'user ' })
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  public id?: number;

  @Column({
    unique: true,
  })
  @Field()
  public login?: string;

  @Column({
    unique: true,
  })
  @Field()
  public email?: string;

  @Column()
  @Field()
  public firstName?: string;

  @Column()
  @Field()
  public lastName?: string;

  @Column()
  @Field()
  public password?: string;

  @Column({
    type: 'enum',
    enum: State,
    default: State.ACTIVE,
  })
  @Field()
  public state: State = State.ACTIVE;

  @Column()
  @Field()
  public createdAt: Date = new Date();

  @Column()
  @Field()
  public updatedAt: Date = new Date();

  public static fromProperties(value: UserProperties): User {
    const user = new User();
    user.id = value.id;
    user.login = value.login;
    user.email = value.email;
    user.firstName = value.firstName;
    user.lastName = value.lastName;
    user.state = value.state;
    user.createdAt = value.createdAt;
    user.updatedAt = value.updatedAt;
    return user;
  }
}
