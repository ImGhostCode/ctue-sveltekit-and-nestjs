import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GetAccount, Roles } from '../auth/decorator';
import { MyJWTGuard, RolesGuard } from '../auth/guard';
import { Account } from '@prisma/client';
import { ACCOUNT_TYPES } from '../global';
import { UpdateProfileDto, UpdatePasswordDto, VerifyCodeDto, ToggleFavoriteDto } from './dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';


@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
    @Get('me')
    getMe(@GetAccount() account: Account) {
        return this.userService.getUser(account)
    }

    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.ADMIN)
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.ADMIN)
    @Put('toggle-ban/:id')
    toggleBanUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.toggleBanUser(id)
    }

    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
    @Put('update-profile/:id')
    updateProfile(@Param('id', ParseIntPipe) id: number, @GetAccount() account: Account, @Body() updateProfileDto: UpdateProfileDto) {
        if (account.accountType == ACCOUNT_TYPES.USER) return this.userService.updateProfile(account.userId, updateProfileDto)
        return this.userService.updateProfile(id, updateProfileDto)
    }

    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.USER, ACCOUNT_TYPES.ADMIN)
    @Put('update-password/:id')
    updatePassword(@Param('id', ParseIntPipe) id: number, @GetAccount() account: Account, @Body() updatePasswordDto: UpdatePasswordDto) {
        if (account.accountType == ACCOUNT_TYPES.USER) return this.userService.updatePassword(account.userId, updatePasswordDto)
        return this.userService.updatePassword(id, updatePasswordDto)
    }

    @UseGuards(MyJWTGuard, RolesGuard)
    @Roles(ACCOUNT_TYPES.ADMIN)
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id)
    }

    @Post('reset-password')
    resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return this.userService.resetPassword(resetPasswordDto)
    }

    @Post('verify-code')
    sendVerifyCode(@Body() verifyCodeDto: VerifyCodeDto) {
        return this.userService.sendVerifyCode(verifyCodeDto)
    }

    @Put('toggle-favorite')
    toggleFavorite(@Body() toggleFavoriteDto: ToggleFavoriteDto) {
        return this.userService.toggleFavorite(toggleFavoriteDto)
    }
}