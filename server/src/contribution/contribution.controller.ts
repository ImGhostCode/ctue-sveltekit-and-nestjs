import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { CreateContributionDto, UpdateContributionDto } from './dto';

@Controller('contribution')
export class ContributionController {
  constructor(private readonly contributionService: ContributionService) { }

  @Post()
  create(@Body() createContributionDto: CreateContributionDto) {
    return this.contributionService.create(createContributionDto);
  }

  @Get()
  findAll() {
    return this.contributionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.contributionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateContributionDto: UpdateContributionDto) {
    return this.contributionService.update(id, updateContributionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contributionService.remove(id);
  }
}
