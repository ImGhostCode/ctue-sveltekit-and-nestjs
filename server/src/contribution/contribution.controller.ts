import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { CreateContributionDto } from './dto';
import { GetAccount } from '../auth/decorator';
import { Account } from '@prisma/client';
import { MyJWTGuard } from '../auth/guard';

@UseGuards(MyJWTGuard)
@Controller('contribution')
export class ContributionController {
  constructor(private readonly contributionService: ContributionService) { }

  @Post()
  create(@Body() createContributionDto: CreateContributionDto, @GetAccount() account: Account) {
    return this.contributionService.create(createContributionDto, account.userId);
  }

  @Get()
  findAll(@Query("type") type: string) {
    return this.contributionService.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.contributionService.findOne(id);
  }

  @Patch(':id')
  verifyContribute(@Param('id', ParseIntPipe) id: number, @Body() body: { status: string }) {
    return this.contributionService.verifyContribute(id, body.status);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contributionService.remove(id);
  }
}
