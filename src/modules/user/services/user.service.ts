import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';

import {User} from "../entities/user.entity"
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { AuthUtils } from 'src/common/utils/auth.util';

@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private usersRepository: Repository<User>, private authUtils: AuthUtils) {}
    
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
    findOne(userId): Promise<User> {
        return this.usersRepository.findOne(userId);
    }
    findByUsername(username): Promise<User> {
        return this.usersRepository.findOne({username: username});
    }
    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async createUser(user: CreateUserDto): Promise<User> {
        let hashedPassword = await this.authUtils.hash(user.password);
        user.password = hashedPassword;
        return this.usersRepository.save(user);
    }

    updateUser(userId: number, user: UpdateUserDto): any {
        return this.usersRepository.update({id: userId}, user);
    }

    deleteUser(userId): any {
        return this.usersRepository.delete(userId);
    }
}
