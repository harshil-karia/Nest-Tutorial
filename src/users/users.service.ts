import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    postUsers(): string{
        return 'POST Users';
    }
    getUsers(): string{
        return 'GET Users';
    }
    getUsersDetails(): string{
        return 'User Details';
    }
}
