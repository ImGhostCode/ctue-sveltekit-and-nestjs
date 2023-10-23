import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { FavoriteItemService } from './favorite-item.service';
import { AddToFavoritesListDto, RemoveToFavoritesListDto } from './dto';
import { GetAccount } from '../auth/decorator';
import { Account } from '@prisma/client';
import { MyJWTGuard } from '../auth/guard';

@UseGuards(MyJWTGuard)
@Controller('favorite-item')
export class FavoriteItemController {
  constructor(private favoriteItemService: FavoriteItemService) { }

  @Patch('add')
  addToFavoritesList(@Body() addToFavoritesListDto: AddToFavoritesListDto, @GetAccount() account: Account) {
    return this.favoriteItemService.addToFavoritesList(addToFavoritesListDto, account.userId);
  }

  @Patch('remove')
  deleteToFavoritesList(@Body() removeToFavoritesListDto: RemoveToFavoritesListDto, @GetAccount() account: Account) {
    return this.favoriteItemService.deleteToFavoritesList(removeToFavoritesListDto, account.userId);
  }

  @Get()
  findAllByUserId(@GetAccount() accout: Account) {
    return this.favoriteItemService.findAllByUserId(accout.userId);
  }
}
