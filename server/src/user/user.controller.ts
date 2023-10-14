import { Body, Controller, Delete, Get, Param, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GetAccount, Roles } from '../auth/decorator';
import { MyJWTGuard, RolesGuard } from '../auth/guard';
import { Account } from '@prisma/client';
import { ACCOUNT_TYPES } from '../global';
import { ChangeUserDto, ChangePasswordDto } from './dto';


@Controller('users')
@UseGuards(MyJWTGuard, RolesGuard)
export class UserController {
    constructor(private userService: UserService) { }

    @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
    @Get('me')
    getMe(@GetAccount() account: Account) {
        return this.userService.getUser(account)
    }

    @Roles(ACCOUNT_TYPES.ADMIN)
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Roles(ACCOUNT_TYPES.ADMIN)
    @Put('is-ban/:id')
    banUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.isBanUser(id)
    }

    @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
    @Put('change-user/:id')
    changeUser(@Param('id', ParseIntPipe) id: number, @GetAccount() account: Account, @Body() changeUserDto: ChangeUserDto) {
        if (account.accountType == ACCOUNT_TYPES.USER) return this.userService.changeUser(account.userId, changeUserDto)
        return this.userService.changeUser(id, changeUserDto)
    }

    @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
    @Put('change-password/:id')
    changePassword(@Param('id', ParseIntPipe) id: number, @GetAccount() account: Account, @Body() changePasswordDto: ChangePasswordDto) {
        if (account.accountType == ACCOUNT_TYPES.USER) return this.userService.changePassword(account.userId, changePasswordDto)
        return this.userService.changePassword(id, changePasswordDto)
    }

    @Roles(ACCOUNT_TYPES.ADMIN)
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id)
    }
}