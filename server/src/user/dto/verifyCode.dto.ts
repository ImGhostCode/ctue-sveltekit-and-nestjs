import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";
import { CONSTANTS_MAX } from "src/global";

export class VerifyCodeDto {
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.EMAIL_LEN)
    email: string
}