import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SentenceService } from './sentence.service';
import { CreateSentenceDto, UpdateSentenceDto } from './dto';

@Controller('sentence')
export class SentenceController {
    constructor(private sentenceService: SentenceService) { }

    @Post()
    create(@Body() createSentenceDto: CreateSentenceDto) {
        return this.sentenceService.create(createSentenceDto)
    }

    @Get()
    findAll() {
        return this.sentenceService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.sentenceService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateSentenceDto: UpdateSentenceDto) {
        return this.sentenceService.update(id, updateSentenceDto)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.sentenceService.delete(id)
    }
}
