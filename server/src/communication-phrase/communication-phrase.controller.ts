import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CommunicationPhraseService } from './communication-phrase.service';
import { CreateCommunicationPhraseDto, UpdateCommunicationPhraseDto } from './dto';


@Controller('communication-phrase')
export class CommunicationPhraseController {
  constructor(private communicationPhraseService: CommunicationPhraseService) { }

  @Post()
  create(@Body() createCommunicationPhraseDto: CreateCommunicationPhraseDto) {
    return this.communicationPhraseService.create(createCommunicationPhraseDto);
  }

  @Get()
  findAll() {
    return this.communicationPhraseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.communicationPhraseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCommunicationPhraseDto: UpdateCommunicationPhraseDto) {
    return this.communicationPhraseService.update(id, updateCommunicationPhraseDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.communicationPhraseService.remove(id);
  }
}
