import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"
import { MAX, MIN } from '../../constants'

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(MAX.EMAIL_LEN)
    email: string

    @IsString()
    @MaxLength(MAX.NAME_LEN)
    @IsNotEmpty()
    name: string

    @IsString()
    @MinLength(MIN.PASSWORD_LEN)
    @IsNotEmpty()
    password: string
}