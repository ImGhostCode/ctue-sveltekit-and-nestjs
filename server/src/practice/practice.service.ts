import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePraticeDto } from './dto';
import { ResponseData } from '../global';
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
}