import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from 'src/global';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ChangeUserDto } from './dto';
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

    async isBanUser(id: number) {
        if (!id) return new ResponseData<string>(null, 400, 'Thiếu tham số bắt buộc')
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

    async changeUser(id: number, changeUserDto: ChangeUserDto) {
        if (!id && !changeUserDto) return new ResponseData<string>(null, 400, 'Thiếu tham số bắt buộc')
        try {
            const account = await this.prismaService.account.findFirst({
                where: { userId: id }
            })
            if (!account) new ResponseData<any>(null, 400, 'Tài khoản không tồn tại')
            await this.prismaService.user.update({
                where: { id: id },
                data: { ...changeUserDto }
            })
            return new ResponseData<any>(null, 200, 'Cập nhật thông tin thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async changePassword(id: number, changePasswordDto: ChangePasswordDto) {
        if (!id && !changePasswordDto) return new ResponseData<string>(null, 400, 'Thiếu tham số bắt buộc')
        try {
            const account = await this.prismaService.account.findFirst({
                where: { userId: id }
            })
            if (!account) new ResponseData<any>(null, 400, 'Tài khoản không tồn tại')
            const passwordMatched = await argon2.verify(account.password, changePasswordDto.oldpassword)
            if (!passwordMatched) return new ResponseData<string>(null, 400, 'Mật khẩu hiện tại không chính xác')
            const hashedPassword = await argon2.hash(changePasswordDto.newpassword)
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
        if (!id) return new ResponseData<string>(null, 400, 'Thiếu tham số bắt buộc')
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
}
