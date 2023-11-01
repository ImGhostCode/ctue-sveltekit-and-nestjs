import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTopicDto {
    @IsString()
    @IsNotEmpty()
    name: string
}
