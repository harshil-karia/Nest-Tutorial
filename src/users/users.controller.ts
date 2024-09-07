import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    //constructor(private readonly usersService: UsersService) {}

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
    findAllUsers() {
        return [];
    }

    @Get(':id')
    findUser(@Param('id') id: string){
        return { 
            id,
            message: 'Specific User'
        };
    }

    @Post()
    addUser(@Body() user: {}){
        return user;
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() userDetails: {}){
        return { 
            id,
            ...userDetails
        };
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return { 
            id,
            message: 'delete'
        };
    }
}
