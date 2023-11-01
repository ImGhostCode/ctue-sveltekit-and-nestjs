import { IsNotEmpty, IsString, MaxLength } from "class-validator"
import { CONSTANTS_MAX } from "../../global"

export class CreateCommunicationPhraseDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.SENTENCE_CONTENT_LEN)
    content: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.SENTENCE_MEAN_LEN)
    mean: string
}
