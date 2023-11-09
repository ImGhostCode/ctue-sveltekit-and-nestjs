import { Injectable } from '@nestjs/common';
import { CreateWordDto, UpdateWordDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from '../global';
import { Word } from '@prisma/client';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class WordService {
    constructor(private prismaService: PrismaService, private cloudinaryService: CloudinaryService) { }

    async create(createWordDto: CreateWordDto, pictureFile: Express.Multer.File) {
        try {
            let { userId, typeId, topicId, levelId, specializationId, content, mean, note, phonetic, examples, antonyms, synonyms, picture } = createWordDto
            const isExisted = await this.isExisted(createWordDto.content)
            if (isExisted) return new ResponseData<string>(null, 400, 'Từ đã tồn tại')
            if (pictureFile) {
                const file = await this.cloudinaryService.uploadFile(pictureFile)
                picture = file.url
            }
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
                    antonyms,
                    synonyms,
                    picture
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
            console.log(error);

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

    async update(id: number, updateWordDto: UpdateWordDto, pictureFile: Express.Multer.File) {
        try {
            let { typeId, topicId, levelId, specializationId, content, mean, note, phonetic, examples, antonyms, synonyms } = updateWordDto
            const word = await this.findById(id)
            if (!word) return new ResponseData<string>(null, 400, 'Từ không tồn tại')
            let picture: string
            if (pictureFile) {
                const file = await this.cloudinaryService.uploadFile(pictureFile)
                picture = file.url
            }
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
            } else {
                topicId = []
            }
            const newWord = await this.prismaService.word.update({
                where: { id: id },
                data: {
                    typeId,
                    content,
                    mean,
                    note,
                    levelId,
                    specializationId,
                    phonetic,
                    examples,
                    antonyms,
                    synonyms,
                    Topic: { connect: topicId.map((id) => ({ id })) },
                    picture
                },
                include: {
                    User: true,
                    Topic: true,
                    Type: true,
                    Specialization: true,
                    Level: true
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
