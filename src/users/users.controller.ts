import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // @Post()
    // postUsers(): string{
    //     return this.usersService.postUsers();
    // }
    // @Get()
    // getUsers(): string{
    //     return this.usersService.getUsers();
    // }
    // @Get()
    // getUserDetails(): string{
    //     return this.usersService.getUsersDetails();
    // }
    @Get()
    findAllUsers(@Query('role') role?: 'INTERN' | 'ADMIN') {
        return this.usersService.findAllUsers(role);    
    }

    @Get(':id')
    findUser(@Param('id',ParseIntPipe) id: number){
        return this.usersService.findUser(id);
        // return { 
        //     id,
        //     message: 'Specific User'
        // };
    }

    @Post()
    addUser(@Body(ValidationPipe) user: CreateUserDto){
        return this.usersService.addUser(user)
        //return user;
    }

    @Patch(':id')
    updateUser(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) userDetails: UpdateUserDto){
        return this.usersService.updateUser(id, userDetails)
        
        // return { 
        //     id,
        //     ...userDetails
        // };
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id: number){
        return this.usersService.deleteUser(id)
        
        // return { 
        //     id,
        //     message: 'delete'
        // };
    }
}
