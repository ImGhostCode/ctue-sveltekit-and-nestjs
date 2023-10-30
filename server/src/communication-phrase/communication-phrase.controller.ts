import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CommunicationPhraseService } from './communication-phrase.service';
import { CreateCommunicationPhraseDto, UpdateCommunicationPhraseDto } from './dto';
import { MyJWTGuard, RolesGuard } from '../auth/guard';
import { Roles } from '../auth/decorator';
import { ACCOUNT_TYPES } from '../global';

@Controller('communication-phrase')
export class CommunicationPhraseController {
  constructor(private communicationPhraseService: CommunicationPhraseService) { }

  @Post()
  @UseGuards(MyJWTGuard, RolesGuard)
  @Roles(ACCOUNT_TYPES.ADMIN)
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
  @UseGuards(MyJWTGuard, RolesGuard)
  @Roles(ACCOUNT_TYPES.ADMIN)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCommunicationPhraseDto: UpdateCommunicationPhraseDto) {
    return this.communicationPhraseService.update(id, updateCommunicationPhraseDto);
  }

  @Delete(':id')
  @UseGuards(MyJWTGuard, RolesGuard)
  @Roles(ACCOUNT_TYPES.ADMIN)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.communicationPhraseService.remove(id);
  }
}
