import { IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  @IsNotEmpty()
  login: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  firstName: string;
  
  @Field()
  @IsNotEmpty()
  lastName: string;

  constructor(
    login: string,
    email: string,
    firstName: string,
    lastName: string,
  ) {
    this.login = login;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
