import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { WordService } from './word.service';
import { CreateWordDto, UpdateWordDto } from './dto';

@Controller('word')
export class WordController {
    constructor(private wordServive: WordService) { }

    @Post()
    create(@Body() createWordDto: CreateWordDto) {
        return this.wordServive.create(createWordDto)
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
    update(@Param('id', ParseIntPipe) id: number, @Body() updateWordDto: UpdateWordDto) {
        return this.wordServive.update(id, updateWordDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.wordServive.delete(id)
    }
}
