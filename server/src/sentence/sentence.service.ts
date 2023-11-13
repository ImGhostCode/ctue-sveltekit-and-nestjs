import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSentenceDto, UpdateSentenceDto } from './dto';
import { ResponseData } from '../global';
import { Sentence } from '@prisma/client';

@Injectable()
export class SentenceService {
    constructor(private prismaService: PrismaService) { }

    async create(createSentenceDto: CreateSentenceDto) {
        try {
            const isExisted = await this.isExisted(createSentenceDto.content)
            if (isExisted) return new ResponseData<string>(null, 400, 'Câu đã tồn tại')
            const sentence = await this.prismaService.sentence.create({
                data: {
                    typeId: createSentenceDto.typeId,
                    userId: createSentenceDto.userId,
                    content: createSentenceDto.content,
                    mean: createSentenceDto.mean,
                    note: createSentenceDto.note,
                    Topic: {
                        connect: createSentenceDto.topicId.map((id) => ({ id }))
                    }
                },
                include: {
                    User: true,
                    Type: true,
                    Topic: true
                }
            })
            return new ResponseData<Sentence>(sentence, 200, 'Tạo câu thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async findAll(option: { topic: [], type: number, page: number, sort: any }) {
        try {
            let { sort, type, topic, page } = option
            let pageSize = 20
            if (!page) page = 1
            let next = (page - 1) * pageSize
            const totalCount = await this.prismaService.sentence.count({
                where: {
                    typeId: type,
                    Topic: {
                        some: {
                            id: { in: topic }
                        }
                    }
                }
            })
            const totalPages = Math.ceil(totalCount / pageSize)
            if (page > totalPages) return new ResponseData<any>(null, 400, 'Số trang không hợp lệ')
            const sentences = await this.prismaService.sentence.findMany({
                skip: next,
                take: pageSize,
                orderBy: {
                    content: sort
                },
                where: {
                    typeId: type,
                    Topic: {
                        some: {
                            id: {
                                in: topic
                            }
                        }
                    }
                },
                include: {
                    Practice: true,
                    Topic: true,
                    Type: true
                }
            })
            return new ResponseData<any>({ sentences, totalPages }, 200, 'Tìm thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async findOne(id: number) {
        try {
            const sentence = await this.findById(id)
            if (!sentence) return new ResponseData<string>(null, 400, 'Câu không tồn tại')
            return new ResponseData<Sentence>(sentence, 200, 'Tìm thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async update(id: number, updateSentenceDto: UpdateSentenceDto) {
        try {
            let { typeId, content, mean, note, topicId } = updateSentenceDto
            const sentence = await this.findById(id)
            if (!sentence) return new ResponseData<string>(null, 400, 'Câu không tồn tại')
            if (content) {
                const isExisted = await this.isExisted(content)
                if (isExisted) return new ResponseData<string>(null, 400, 'Câu này đã tồn tại')
            }
            if (topicId) {
                await this.prismaService.sentence.update({
                    where: { id: id },
                    data: {
                        Topic: { disconnect: sentence.Topic.map((id) => id) }
                    }
                })
            }
            topicId = []
            const newSentence = await this.prismaService.sentence.update({
                where: { id: id },
                data: {
                    typeId,
                    content,
                    mean,
                    note,
                    Topic: { connect: topicId.map((id) => ({ id })) }
                },
                include: {
                    Practice: true,
                    User: true,
                    Topic: true,
                    Type: true
                }
            })
            return new ResponseData<Sentence>(newSentence, 200, 'Cập nhật thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async delete(id: number) {
        try {
            const sentence = await this.findById(id)
            if (!sentence) return new ResponseData<string>(null, 400, 'Câu không tồn tại')
            return new ResponseData<Sentence>(await this.prismaService.sentence.delete({ where: { id: id } }), 200, 'Xóa thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async isExisted(content: string) {
        const centence = await this.prismaService.sentence.findFirst({
            where: {
                content: {
                    equals: content,
                    mode: 'insensitive'
                }
            }
        })
        if (centence) return true
        return false
    }

    async findById(id: number) {
        return await this.prismaService.sentence.findUnique({
            where: {
                id: id
            },
            include: {
                Practice: true,
                User: true,
                Topic: true,
                Type: true
            }
        })
    }
}