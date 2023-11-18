import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PracticeService } from './practice.service';
import { GetAccount, Roles } from '../auth/decorator';
import { Account } from '@prisma/client';
import { CreatePraticeDto } from './dto';
import { MyJWTGuard, RolesGuard } from '../auth/guard';
import { ACCOUNT_TYPES } from '../global';


@Controller('practice')
export class PracticeController {
    constructor(private practiceService: PracticeService) { }

    @Post()
    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.ADMIN, ACCOUNT_TYPES.USER)
    createPractice(@GetAccount() account: Account, @Body() createPracticeDto: CreatePraticeDto) {
        return this.practiceService.createPractice(account.userId, createPracticeDto)
    }
}