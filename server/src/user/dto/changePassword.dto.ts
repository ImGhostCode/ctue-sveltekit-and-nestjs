import { IsNotEmpty, IsString, MinLength } from "class-validator"
import { CONSTANTS_MIN } from "src/global"

export class ChangePasswordDto {
    @MinLength(CONSTANTS_MIN.PASSWORD_LEN, { message: `Mật khẩu ít nhất ${CONSTANTS_MIN.PASSWORD_LEN} ký tự` })
    @IsNotEmpty({ message: 'Không được để trống' })
    oldpassword: string

    @MinLength(CONSTANTS_MIN.PASSWORD_LEN, { message: `Mật khẩu ít nhất ${CONSTANTS_MIN.PASSWORD_LEN} ký tự` })
    @IsNotEmpty({ message: 'Không được để trống' })
    newpassword: string
}