import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { MAX, MIN } from '../../constants'

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(MAX.EMAIL_LEN)
    email: string

    @IsString()
    @MinLength(MIN.PASSWORD_LEN)
    password: string
}