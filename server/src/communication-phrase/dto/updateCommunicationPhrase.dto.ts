import { IsOptional, IsString, MaxLength } from "class-validator"
import { CONSTANTS_MAX } from "../../global"

export class UpdateCommunicationPhraseDto {
    @IsOptional()
    @IsString()
    @MaxLength(CONSTANTS_MAX.SENTENCE_CONTENT_LEN)
    content?: string

    @IsOptional()
    @IsString()
    @MaxLength(CONSTANTS_MAX.SENTENCE_MEAN_LEN)
    mean?: string
}