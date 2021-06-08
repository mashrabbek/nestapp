import {IsString, IsNotEmpty, IsInt, IsPositive, IsNumberString} from 'class-validator';

export class CreateUserDto {
  
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  username: string;
  
  @IsNotEmpty()
  @IsString()
  password: string;
  
}
  