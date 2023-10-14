import { Body, Controller, Delete, Get, Param, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GetAccount } from '../auth/decorator';
import { MyJWTGuard } from '../auth/guard';
import { Account } from '@prisma/client';
import { ACCOUNT_TYPES } from 'src/global';
import { ChangeUserDto, ChangePasswordDto } from './dto';


@Controller('users')
@UseGuards(MyJWTGuard)
export class UserController {
    constructor(private userService: UserService) { }

    @Get('me')
    getMe(@GetAccount() account: Account) {
        return this.userService.getUser(account)
    }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Put('is-ban/:id')
    banUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.isBanUser(id)
    }

    @Put('change-user/:id')
    changeUser(@Param('id', ParseIntPipe) id: number, @GetAccount() account: Account, @Body() changeUserDto: ChangeUserDto) {
        if (account.accountType == ACCOUNT_TYPES.USER) return this.userService.changeUser(account.userId, changeUserDto)
        return this.userService.changeUser(id, changeUserDto)
    }

    @Put('change-password/:id')
    changePassword(@Param('id', ParseIntPipe) id: number, @GetAccount() account: Account, @Body() changePasswordDto: ChangePasswordDto) {
        if (account.accountType == ACCOUNT_TYPES.USER) return this.userService.changePassword(account.userId, changePasswordDto)
        return this.userService.changePassword(id, changePasswordDto)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id)
    }
}