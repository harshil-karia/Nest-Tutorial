import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ADMIN", "ENGINEER"],{
        message: "Valid Role Required"
    })
    role: "INTERN" | "ADMIN" | "ENGINEER"
}
