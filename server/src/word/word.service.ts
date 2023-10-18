import { Injectable } from '@nestjs/common';
import { CreateWordDto, UpdateWordDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from '../global';
import { Word } from '@prisma/client';

@Injectable()
export class WordService {
    constructor(private prismaService: PrismaService) { }

    async create(createWordDto: CreateWordDto) {
        try {
            const { userId, typeId, topicId, levelId, specializationId, content, mean, note, phonetic, examples, picture, antonyms, synonyms } = createWordDto
            const isExisted = await this.isExisted(createWordDto.content)
            if (isExisted) return new ResponseData<string>(null, 400, 'Từ đã tồn tại')
            const word = await this.prismaService.word.create({
                data: {
                    userId,
                    typeId,
                    Topic: {
                        connect: topicId.map((id) => ({ id }))
                    },
                    levelId,
                    specializationId,
                    content,
                    mean,
                    note,
                    phonetic,
                    examples,
                    picture,
                    antonyms,
                    synonyms,
                },
                include: {
                    User: true,
                    Topic: true,
                    Type: true,
                    Specialization: true,
                    Level: true
                }
            })
            return new ResponseData<Word>(word, 200, 'Tạo từ thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async findAll() {
        try {
            return new ResponseData<Word>(await this.prismaService.word.findMany({
                include: {
                    User: true,
                    Topic: true,
                    Type: true,
                    Specialization: true,
                    Level: true
                }
            }), 200, 'Tìm thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async findOne(id: number) {
        try {
            const word = await this.findById(id)
            if (!word) return new ResponseData<string>(null, 400, 'Từ không tồn tại')
            return new ResponseData<Word>(word, 200, 'Tìm thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async update(id: number, updateWordDto: UpdateWordDto) {
        try {
            let { typeId, topicId, levelId, specializationId, content, mean, note, phonetic, examples, picture, antonyms, synonyms } = updateWordDto
            const word = await this.findById(id)
            if (!word) return new ResponseData<string>(null, 400, 'Từ không tồn tại')
            if (content) {
                const isExisted = await this.isExisted(content)
                if (isExisted) return new ResponseData<string>(null, 400, 'Từ này đã tồn tại')
            }
            if (topicId) {
                await this.prismaService.word.update({
                    where: { id: id },
                    data: {
                        Topic: { disconnect: word.Topic.map((id) => id) }
                    }
                })
            }
            topicId = []
            const newWord = await this.prismaService.word.update({
                where: { id: id },
                data: {
                    typeId, content, mean, note, levelId, specializationId, phonetic, examples,
                    picture, antonyms, synonyms, Topic: { connect: topicId.map((id) => ({ id })) }
                },
                include: {
                    User: true, Topic: true, Type: true, Specialization: true, Level: true
                }
            })
            return new ResponseData<Word>(newWord, 200, 'Cập nhật thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async delete(id: number) {
        try {
            const word = await this.findById(id)
            if (!word) return new ResponseData<string>(null, 400, 'Từ không tồn tại')
            return new ResponseData<Word>(await this.prismaService.word.delete({ where: { id: id } }), 200, 'Xóa thành công')
        } catch (error) {
            return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
        }
    }

    async isExisted(content: string) {
        const word = await this.prismaService.word.findFirst({
            where: {
                content: {
                    equals: content,
                    mode: 'insensitive'
                }
            }
        })
        if (word) return true
        return false
    }

    async findById(id: number) {
        return await this.prismaService.word.findUnique({
            where: {
                id: id
            },
            include: {
                Practice: true, User: true, Topic: true, Type: true, Level: true, Specialization: true
            }
        })
    }
}
