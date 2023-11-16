import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Query } from '@nestjs/common';
import { FavoriteItemService } from './favorite-item.service';
import { AddToFavoritesListDto, RemoveToFavoritesListDto } from './dto';
import { GetAccount, Roles } from '../auth/decorator';
import { Account } from '@prisma/client';
import { MyJWTGuard, RolesGuard } from '../auth/guard';
import { ACCOUNT_TYPES } from '../global';

@UseGuards(MyJWTGuard, RolesGuard)
@Controller('favorite-item')
export class FavoriteItemController {
  constructor(private favoriteItemService: FavoriteItemService) { }

  @Patch('add')
  @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
  addToFavoritesList(@Body() addToFavoritesListDto: AddToFavoritesListDto, @GetAccount() account: Account) {
    return this.favoriteItemService.addToFavoritesList(addToFavoritesListDto, account.userId);
  }

  @Patch('remove')
  @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
  deleteToFavoritesList(@Body() removeToFavoritesListDto: RemoveToFavoritesListDto, @GetAccount() account: Account) {
    return this.favoriteItemService.deleteToFavoritesList(removeToFavoritesListDto, account.userId);
  }

  @Get()
  @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
  findAllByUserId(@GetAccount() accout: Account, @Query() option: { sort: any }) {
    return this.favoriteItemService.findAllByUserId(accout.userId, option);
  }

  @Get('search/:key')
  @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
  searchByKey(@GetAccount() accout: Account, @Query('key') key: string) {
    return this.favoriteItemService.searchByKey(accout.userId, key)
  }
}
