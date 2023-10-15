import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto, UpdateTypeDto } from './dto';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) { }

  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get(':isword')
  findAll(@Param('isword', ParseBoolPipe) isWord: boolean) {
    return this.typeService.findAll(isWord);
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.typeService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(id, updateTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.typeService.remove(id);
  }
}
