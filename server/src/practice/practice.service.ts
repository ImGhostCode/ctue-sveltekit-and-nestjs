import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePraticeDto } from './dto';
import { PRACTICE_SIZE, ResponseData } from '../global';
import { Practice } from '@prisma/client';

@Injectable()
export class PracticeService {
    constructor(private prismaService: PrismaService) { }

    async createPractice(userId: number, createPracticeDto: CreatePraticeDto) {
        try {
            const data = await this.prismaService.practice.create({
                data: {
                    userId: userId,
                    levelId: createPracticeDto.levelId,
                    typeId: createPracticeDto.typeId,
                    specializationId: createPracticeDto.specializationId,
                    numOfSentence: createPracticeDto.numOfSentence,
                    nRight: createPracticeDto.nRight,
                    nWrong: createPracticeDto.nWrong,
                    nRightConsecutive: createPracticeDto.nRightConsecutive,
                    Words: {
                        connect: createPracticeDto.words.map((id) => ({ id }))
                    }
                }
            })
            return new ResponseData<Practice>(data, 200, 'Lưu thành công kết quả bài thi')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async getLeaderboard() {
        const take = PRACTICE_SIZE.PRACTICE_SELECT
        try {
            const currentDate = new Date();
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const groupByNRight = await this.prismaService.practice.groupBy({
                by: ['userId'],
                where: { createdAt: { gte: firstDayOfMonth } },
                _sum: { nRight: true },
                orderBy: { _sum: { nRight: 'asc' } },
                take: take
            })
            const userIds = groupByNRight.map(entry => entry.userId);
            const users = await this.prismaService.user.findMany({
                where: { id: { in: userIds } }
            });
            const topNRight = users.map(user => {
                const correspondingSumEntry = groupByNRight.find(entry => entry.userId === user.id);
                return { ...user, _sum: correspondingSumEntry ? correspondingSumEntry._sum : null };
            });

            const topNRightConsecutive = await this.prismaService.practice.findMany({
                where: { createdAt: { gte: firstDayOfMonth } },
                orderBy: { nRightConsecutive: 'asc' },
                take: take,
                include: { User: true }
            })

            const totalNRightAndNWrong = await this.prismaService.practice.groupBy({
                by: ['userId'],
                where: { createdAt: { gte: firstDayOfMonth } },
                _sum: {
                    nRight: true,
                    nWrong: true
                }
            });
            const calculatedResults = totalNRightAndNWrong.map(entry => ({
                userId: entry.userId,
                coin: (entry._sum.nRight * 10) - (entry._sum.nWrong * 10)
            }));
            let topCoin = users.map(user => {
                const Results = calculatedResults.find(entry => entry.userId === user.id);
                return { ...user, result: Results };
            });
            topCoin = topCoin.sort((a, b) => b.result.coin - a.result.coin)

            return new ResponseData<any>({ topNRight, topNRightConsecutive, topCoin }, 200, 'Lấy thành công bảng xếp hạng')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }
}