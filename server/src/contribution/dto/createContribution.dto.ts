import { IsArray, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator"
import { Type } from 'class-transformer'
import { CONSTANTS_MAX } from "src/global"

class Content {
    @IsNotEmpty()
    @IsNumber()
    typeId?: number

    @IsArray()
    @IsNotEmpty()
    topicId?: number[]

    @IsOptional()
    @IsNumber()
    levelId?: number

    @IsOptional()
    @IsNumber()
    specializationId?: number

    @IsNotEmpty()
    @IsString()
    content?: string

    @IsNotEmpty()
    @IsString()
    mean?: string

    @IsOptional()
    @IsString()
    @MaxLength(CONSTANTS_MAX.SENTENCE_NOTE_LEN)
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

export class CreateContributionDto {
    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmptyObject()
    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => Content)
    content: Content
}
