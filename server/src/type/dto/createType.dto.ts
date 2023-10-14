import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string
}
