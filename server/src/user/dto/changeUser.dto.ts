import { IsString, MaxLength } from "class-validator"
import { CONSTANTS_MAX } from "src/global"

export class ChangeUserDto {

    name?: string

    avt?: string
}