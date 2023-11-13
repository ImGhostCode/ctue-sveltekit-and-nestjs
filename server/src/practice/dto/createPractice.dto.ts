import { IsArray, IsNotEmpty, IsNumber } from "class-validator"

export class CreatePraticeDto {
    @IsNotEmpty()
    @IsNumber()
    typeId: number

    @IsNotEmpty()
    @IsNumber()
    levelId: number

    @IsNotEmpty()
    @IsNumber()
    specializationId: number

    @IsNotEmpty()
    @IsNumber()
    nRight: number

    @IsNotEmpty()
    @IsNumber()
    nWrong: number

    @IsNotEmpty()
    @IsNumber()
    nRightConsecitive: number

    @IsNotEmpty()
    @IsNumber()
    numOfSentence: number

    @IsNotEmpty()
    @IsArray()
    words: []
}