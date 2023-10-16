import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from 'src/global';
import { UpdateProfileDto, VerifyCodeDto, UpdatePasswordDto, ResetPasswordDto, ToggleFavoriteDto } from './dto';
import * as argon2 from 'argon2';
import { Account } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async getUser(account: Account) {
        try {
            return new ResponseData<any>(account, 200, 'Tài khoản tồn tại')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async getAllUsers() {
        try {
            const accounts = await this.prismaService.account.findMany({
                select: {
                    email: true,
                    userId: true,
                    accountType: true,
                    authType: true,
                    isBan: true,
                    user: true
                }
            })
            return new ResponseData<any>(accounts, 200, 'Tìm thấy các người dùng')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async toggleBanUser(id: number) {
        try {
            const account = await this.prismaService.account.findFirst({
                where: { userId: id }
            })
            if (!account) new ResponseData<any>(null, 400, 'Tài khoản không tồn tại')
            await this.prismaService.account.update({
                where: { email: account.email },
                data: { isBan: !account.isBan }
            })
            if (!account.isBan) return new ResponseData<any>(null, 200, 'Khóa người dùng thành công')
            return new ResponseData<any>(null, 200, 'Mở khóa người dùng thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async updateProfile(id: number, updateProfileDto: UpdateProfileDto) {
        try {
            const account = await this.prismaService.account.findFirst({
                where: { userId: id }
            })
            if (!account) new ResponseData<any>(null, 400, 'Tài khoản không tồn tại')
            await this.prismaService.user.update({
                where: { id: id },
                data: { ...updateProfileDto }
            })
            return new ResponseData<any>(null, 200, 'Cập nhật thông tin thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
        try {
            const account = await this.prismaService.account.findFirst({
                where: { userId: id }
            })
            if (!account) new ResponseData<any>(null, 400, 'Tài khoản không tồn tại')
            const passwordMatched = await argon2.verify(account.password, updatePasswordDto.oldPassword)
            if (!passwordMatched) return new ResponseData<string>(null, 400, 'Mật khẩu hiện tại không chính xác')
            const hashedPassword = await argon2.hash(updatePasswordDto.newPassword)
            await this.prismaService.account.update({
                where: { email: account.email },
                data: { password: hashedPassword }
            })
            return new ResponseData<string>(null, 200, 'Cập nhật mật khẩu thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async deleteUser(id: number) {
        try {
            const account = await this.prismaService.account.findFirst({
                where: { userId: id }
            })
            if (!account) new ResponseData<any>(null, 400, 'Tài khoản không tồn tại')
            await this.prismaService.account.delete({
                where: { email: account.email },
                include: {
                    user: true
                }
            })
            await this.prismaService.user.delete({
                where: { id: account.userId }
            })
            return new ResponseData<any>(null, 200, 'Xóa người dùng thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async resetPassword(resetPasswordDto: ResetPasswordDto) {

    }

    async sendVerifyCode(verifyCodeDto: VerifyCodeDto) {

    }

    async toggleFavorite(toggleFavoriteDto: ToggleFavoriteDto) {

    }
}
