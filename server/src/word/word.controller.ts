import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { WordService } from './word.service';
import { CreateWordDto, UpdateWordDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('word')
export class WordController {
    constructor(private wordServive: WordService) { }

    @Post()
    @UseInterceptors(FileInterceptor('picture'))
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
    @UseInterceptors(FileInterceptor('picture'))
    update(@Param('id', ParseIntPipe) id: number, @Body() updateWordDto: UpdateWordDto, @UploadedFile() picture: Express.Multer.File) {
        return this.wordServive.update(id, updateWordDto, picture)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.wordServive.delete(id)
    }
}
