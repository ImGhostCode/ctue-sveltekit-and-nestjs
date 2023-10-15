import { IsNotEmpty, IsString, isNotEmpty } from "class-validator";

export class CreateTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    isWord: boolean
}
