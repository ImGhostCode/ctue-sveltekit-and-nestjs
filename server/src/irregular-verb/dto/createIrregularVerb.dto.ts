import { IsNotEmpty, IsString, MaxLength } from "class-validator"
import { CONSTANTS_MAX } from "../../global"

export class CreateIrregularVerbDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.WORD_CONTENT_LEN)
    v1: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.WORD_CONTENT_LEN)
    v2: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.WORD_CONTENT_LEN)
    v3: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.WORD_MEAN_LEN)
    mean: string
}
