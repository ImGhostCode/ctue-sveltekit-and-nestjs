import { IsNumber, IsOptional } from "class-validator";

export class AddToFavoritesListDto {
    @IsOptional()
    @IsNumber()
    wordId?: number

    @IsOptional()
    @IsNumber()
    sentenceId?: number
}
