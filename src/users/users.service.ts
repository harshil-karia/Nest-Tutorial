import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Harshil",
            "email": "harshil@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Karia",
            "email": "hk@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 3,
            "name": "ABC",
            "email": "abc@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 4,
            "name": "PQR",
            "email": "pqr@gmail.com",
            "role": "ADMIN"
        },
    ]
    findAllUsers(role?: "INTERN" | "ADMIN" | "ENGINEER"){
        if(role){
            const users =  this.users.filter(user => user.role === role)
            if(users.length === 0){
                throw new NotFoundException("No user with this role")
            } 
            return users
        }
        
        return this.users
    }
    findUser(id: number){
        const user = this.users.find(user => user.id === id)

        if(!user){
            throw new NotFoundException("User Not Found")
        }

        return user;
    }
    addUser(user: CreateUserDto){
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    updateUser(id: number, updatedUser: UpdateUserDto){
        this.users = this.users.map(user => {
            if(user.id === id){
                return { ...user, ...updatedUser}
            } 
            return user
        })
        return this.findUser(id)
    }
    deleteUser(id: number){
        const removedUser = this.findUser(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser
    }


}
