import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';

import {User} from "../entities/user.entity"
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private usersRepository: Repository<User>) {}
    
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(userId): Promise<User> {
        return this.usersRepository.findOne(userId);
    }
    
    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    createUser(user: CreateUserDto): Promise<User> {
        return this.usersRepository.save(user);
    }

    updateUser(userId: number, user: UpdateUserDto): any {
        return this.usersRepository.update({id: userId}, user);
    }

    deleteUser(userId): any {
        return this.usersRepository.delete(userId);
    }
}
