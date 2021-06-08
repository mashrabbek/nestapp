import { Body, Controller, Get, Param, Post, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }
    
    @Put() 
    updateUser(@Body() user: UpdateUserDto) {
        let userId = user.id;
        return this.userService.updateUser(userId, user);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: string) {
        return this.userService.deleteUser(id);
    }
    
}
