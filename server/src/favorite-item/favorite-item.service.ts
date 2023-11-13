import { Injectable } from '@nestjs/common';
import { AddToFavoritesListDto, RemoveToFavoritesListDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from '../global';
import { FavoriteItem } from '@prisma/client';

interface AddToFavorites {
  Word?: { connect: { id: number } };
  Sentence?: { connect: { id: number } };
}

interface RemovetoFavorites {
  Word?: { disconnect: { id: number } };
  Sentence?: { disconnect: { id: number } };
}

@Injectable()
export class FavoriteItemService {
  constructor(private prismaService: PrismaService) { }

  async findFavoritesByUserId(userId: number) {
    const user = await this.prismaService.user.findUnique({ where: { id: userId }, include: { FavoriteList: true } })
    return await this.prismaService.favoriteItem.findUnique({ where: { id: user.FavoriteList[0].id }, include: { Word: true, Sentence: true } })
  }

  async addToFavoritesList(addToFavoritesListDto: AddToFavoritesListDto, userId: number) {
    try {
      const { wordId, sentenceId } = addToFavoritesListDto
      const favoriteItem = await this.findFavoritesByUserId(userId)
      const addToFavorites: AddToFavorites = {}
      if (wordId) {
        if (favoriteItem.Word.some((item) => item.id == wordId)) return new ResponseData<FavoriteItem>(null, 400, 'Đã tồn tại trong danh sách yêu thích')
        addToFavorites.Word = { connect: { id: wordId } };
      }
      if (sentenceId) {
        if (favoriteItem.Sentence.some((item) => item.id == sentenceId)) return new ResponseData<FavoriteItem>(null, 400, 'Đã tồn tại trong danh sách yêu thích')
        addToFavorites.Sentence = { connect: { id: sentenceId } };
      }
      const newFavoriteItem = await this.prismaService.favoriteItem.update({
        where: { id: favoriteItem.id },
        data: addToFavorites
      })
      if (!newFavoriteItem) return new ResponseData<FavoriteItem>(null, 400, 'Thêm yêu thích thất bại')
      return new ResponseData<FavoriteItem>(newFavoriteItem, 200, 'Thêm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async deleteToFavoritesList(removeToFavoritesListDto: RemoveToFavoritesListDto, userId: number) {
    try {
      const { wordId, sentenceId } = removeToFavoritesListDto
      const favoriteItem = await this.findFavoritesByUserId(userId)
      const removeToFavorites: RemovetoFavorites = {}
      if (wordId) {
        if (!favoriteItem.Word.some((item) => item.id == wordId)) return new ResponseData<FavoriteItem>(null, 400, 'Không tồn tại trong danh sách yêu thích')
        removeToFavorites.Word = { disconnect: { id: wordId } };
      }
      if (sentenceId) {
        if (!favoriteItem.Sentence.some((item) => item.id == sentenceId)) return new ResponseData<FavoriteItem>(null, 400, 'Không tồn tại trong danh sách yêu thích')
        removeToFavorites.Sentence = { disconnect: { id: sentenceId } };
      }
      const newFavoriteItem = await this.prismaService.favoriteItem.update({
        where: { id: favoriteItem.id },
        data: removeToFavorites
      })
      if (!newFavoriteItem) return new ResponseData<FavoriteItem>(null, 400, 'Xóa yêu thích thất bại')
      return new ResponseData<FavoriteItem>(newFavoriteItem, 200, 'Xóa thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findAllByUserId(userId: number, option: { sort: any }) {
    try {
      const { sort } = option
      const data = await this.prismaService.favoriteItem.findFirst({
        where: {
          userId: userId
        },
        include: {
          Word: {
            orderBy: sort
          },
          Sentence: {
            orderBy: sort
          }
        }
      })
      return new ResponseData<FavoriteItem>(data, 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async searchByKey(userId: number, key: string) {
    try {
      const data = await this.prismaService.favoriteItem.findFirst({
        where: {
          userId: userId
        },
        include: {
          Word: {
            where: {
              OR: [
                {
                  content: { contains: key },
                },
                {
                  mean: { contains: key }
                }
              ]
            }
          },
          Sentence: {
            where: {
              OR: [
                {
                  content: { contains: key },
                },
                {
                  mean: { contains: key }
                }
              ]
            }
          }
        }
      })
      return new ResponseData<FavoriteItem>(data, 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }
}
