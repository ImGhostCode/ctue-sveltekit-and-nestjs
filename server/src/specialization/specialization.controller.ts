import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { CreateSpecializationDto, UpdateSpecializationDto } from './dto';

@Controller('specialization')
export class SpecializationController {
  constructor(private readonly specializationService: SpecializationService) { }

  @Post()
  create(@Body() createSpecializationDto: CreateSpecializationDto) {
    return this.specializationService.create(createSpecializationDto);
  }

  @Get()
  findAll() {
    return this.specializationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.specializationService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSpecializationDto: UpdateSpecializationDto) {
    return this.specializationService.update(id, updateSpecializationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.specializationService.remove(id);
  }
}
