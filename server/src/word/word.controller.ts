import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { WordService } from './word.service';
import { CreateWordDto, UpdateWordDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MyJWTGuard, RolesGuard } from '../auth/guard';
import { Roles } from '../auth/decorator';
import { ACCOUNT_TYPES } from '../global';

@Controller('word')
export class WordController {
    constructor(private wordServive: WordService) { }

    @Post()
    @UseInterceptors(FileInterceptor('picture'))
    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.ADMIN)
    create(@Body() createWordDto: CreateWordDto, @UploadedFile() picture: Express.Multer.File) {
        return this.wordServive.create(createWordDto, picture)
    }

    @Get()
    findAll(@Query() option: { sort: any, type: number, level: number, specialization: number, topic: [], page: number, key: string }) {
        return this.wordServive.findAll(option)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.wordServive.findOne(id)
    }

    @Patch(':id')
    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.ADMIN)
    @UseInterceptors(FileInterceptor('picture'))
    update(@Param('id', ParseIntPipe) id: number, @Body() updateWordDto: UpdateWordDto, @UploadedFile() picture: Express.Multer.File) {
        return this.wordServive.update(id, updateWordDto, picture)
    }

    @Delete(':id')
    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.ADMIN)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.wordServive.delete(id)
    }

    @Get('words-pack')
    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.USER)
    getWordsPack(@Query() option: { type: number, level: number, specialization: number, topic: [], numSentence: number }) {
        return this.wordServive.getWordsPack(option)
    }

    @Get('look-up-dictionary/:key')
    lookUpDictionary(@Param('key') key: string) {
        return this.lookUpDictionary(key)
    }
}