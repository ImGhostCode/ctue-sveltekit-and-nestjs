import { IsArray, IsNumber, IsOptional, IsString, MaxLength } from "class-validator"
import { CONSTANTS_MAX } from "../../global"
export class UpdateWordDto {
    @IsOptional()
    @IsNumber()
    practiceId?: number

    @IsOptional()
    @IsNumber()
    typeId?: number

    @IsOptional()
    @IsArray()
    topicId?: number[]

    @IsOptional()
    @IsNumber()
    levelId?: number

    @IsOptional()
    @IsNumber()
    specializationId?: number

    @IsOptional()
    @IsString()
    @MaxLength(CONSTANTS_MAX.WORD_CONTENT_LEN)
    content?: string

    @IsOptional()
    @IsString()
    @MaxLength(CONSTANTS_MAX.WORD_MEAN_LEN)
    mean?: string

    @IsOptional()
    @IsString()
    @MaxLength(CONSTANTS_MAX.WORD_NOTE_LEN)
    note?: string

    @IsOptional()
    @IsString()
    phonetic?: string

    @IsOptional()
    @IsArray()
    examples?: string[]

    @IsOptional()
    @IsString()
    picture?: string

    @IsOptional()
    @IsString()
    synonyms?: string

    @IsOptional()
    @IsString()
    antonyms?: string
}