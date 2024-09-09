import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
    findUser(@Param('id') id: string){
        return this.usersService.findUser(+id);
        // return { 
        //     id,
        //     message: 'Specific User'
        // };
    }

    @Post()
    addUser(@Body() user: {name: string, email: string, role: 'INTERN' | 'ADMIN'}){
        return this.usersService.addUser(user)
        //return user;
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() userDetails: {name?: string, email?: string, role?: 'INTERN' | 'ADMIN'}){
        return this.usersService.updateUser(+id, userDetails)
        
        // return { 
        //     id,
        //     ...userDetails
        // };
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.usersService.deleteUser(+id)
        
        // return { 
        //     id,
        //     message: 'delete'
        // };
    }
}
