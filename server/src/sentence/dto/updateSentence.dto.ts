import { IsNumber, IsString, MaxLength } from "class-validator"
import { CONSTANTS_MAX } from "src/global"

export class UpdateSentenceDto {
    @IsNumber()
    typeId?: number

    @IsNumber()
    topicId?: number

    @IsNumber()
    practiceId?: number

    @IsString()
    @MaxLength(CONSTANTS_MAX.SENTENCE_CONTENT_LEN)
    content?: string

    @IsString()
    @MaxLength(CONSTANTS_MAX.SENTENCE_MEAN_LEN)
    mean?: string

    @IsString()
    @MaxLength(CONSTANTS_MAX.SENTENCE_NOTE_LEN)
    note?: string
}