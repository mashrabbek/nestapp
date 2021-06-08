import { PartialType } from '@nestjs/mapped-types';
import {IsString, IsNotEmpty, IsInt, IsPositive, IsOptional} from 'class-validator';
import { CreateUserDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto){
    @IsInt()
    @IsPositive()
    id: number
}
    