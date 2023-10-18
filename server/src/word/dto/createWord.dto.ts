import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator"
import { CONSTANTS_MAX } from "../../global"

export class CreateWordDto {
    @IsOptional()
    @IsNumber()
    userId?: number

    @IsNumber()
    @IsNotEmpty()
    typeId: number

    @IsNotEmpty()
    @IsArray()
    topicId: number[]

    @IsNumber()
    @IsNotEmpty()
    levelId: number

    @IsNumber()
    @IsNotEmpty()
    specializationId: number

    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.WORD_CONTENT_LEN)
    content: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(CONSTANTS_MAX.WORD_MEAN_LEN)
    mean: string

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