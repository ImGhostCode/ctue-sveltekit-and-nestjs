import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
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
    findAll() {
        return this.wordServive.findAll()
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
}
