import { IsNumber, IsOptional } from "class-validator"

export class RemoveToFavoritesListDto {
    @IsOptional()
    @IsNumber()
    wordId?: number

    @IsOptional()
    @IsNumber()
    sentenceId?: number
}
