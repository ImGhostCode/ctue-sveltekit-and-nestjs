import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePraticeDto } from './dto';
import { PAGE_SIZE, ResponseData } from '../global';
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

    async findAllByUser(page: number, userId: number) {
        let pageSize = PAGE_SIZE.PAGE_PRACTICE
        try {

            const totalCount = await this.prismaService.practice.count({
                where: {
                    userId: userId
                }
            })
            let totalPages = Math.ceil(totalCount / pageSize)
            if (!totalPages) totalPages = 1
            if (!page || page < 1) page = 1
            if (page > totalPages) page = totalPages
            let next = (page - 1) * pageSize
            const practices = await this.prismaService.practice.findMany({
                skip: next,
                take: pageSize,
                orderBy: {
                    createdAt: 'desc'
                },
                where: {
                    userId: userId
                },
                include: {
                    // Topic: true,
                    // Type: true,
                    // Specialization: true,
                    // Level: true,
                    Words: true
                }
            })
            return new ResponseData<any>({ practices, totalPages }, 200, 'Tìm thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }
}