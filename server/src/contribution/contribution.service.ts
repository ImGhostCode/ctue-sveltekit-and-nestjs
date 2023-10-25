import { Injectable } from '@nestjs/common';
import { CreateContributionDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { CONSTANTS_MAX, CONTRIBUTION_STATUS, ResponseData } from '../global';
import { Contribution } from '@prisma/client';
import { WordService } from '../word/word.service';
import { SentenceService } from '../sentence/sentence.service';

@Injectable()
export class ContributionService {
  constructor(private prismaService: PrismaService, private wordService: WordService, private sentenceService: SentenceService) { }

  async create(createContributionDto: CreateContributionDto, userId: number) {
    const { levelId, specializationId, content, mean } = createContributionDto.content
    try {
      if (createContributionDto.type === 'word') {
        if (!levelId || !specializationId) {
          return new ResponseData<string>(null, 400, 'Thiếu tham số bắt buộc')
        }
        if (content.length > CONSTANTS_MAX.WORD_CONTENT_LEN || mean.length > CONSTANTS_MAX.WORD_NOTE_LEN) {
          return new ResponseData<string>(null, 400, 'Độ dài các thuộc thính không phù hợp')
        }
      }
      if (createContributionDto.type === 'sentence') {
        if (content.length > CONSTANTS_MAX.SENTENCE_CONTENT_LEN || mean.length > CONSTANTS_MAX.SENTENCE_MEAN_LEN) {
          return new ResponseData<string>(null, 400, 'Độ dài các thuộc thính không phù hợp')
        }
      }
      const contribution = await this.prismaService.contribution.create({
        data: {
          userId: userId,
          content: JSON.stringify(createContributionDto.content),
          type: createContributionDto.type,
          status: CONTRIBUTION_STATUS.WAITING
        }
      })
      return new ResponseData<Contribution>(contribution, 200, 'Tạo thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findAll(type: string) {
    try {
      let contributions = await this.prismaService.contribution.findMany({ where: { type } })
      contributions.forEach((contribution) => contribution.content = JSON.parse(contribution.content as string))
      return new ResponseData<Contribution>(contributions, 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findOne(id: number) {
    try {
      const contribution = await this.findById(id)
      if (!contribution) return new ResponseData<string>(null, 400, 'Đóng góp không tồn tại')
      return new ResponseData<Contribution>(contribution, 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async verifyContribute(id: number, status: string, pictureFile: Express.Multer.File) {
    try {
      const contribution = await this.findById(id)
      if (!contribution) return new ResponseData<string>(null, 400, 'Đóng góp không tồn tại')
      if (contribution.status !== CONTRIBUTION_STATUS.WAITING) return new ResponseData<string>(null, 400, "Từ đã được xác minh")
      if (status === CONTRIBUTION_STATUS.ACCEPT) {
        const { typeId, topicId, levelId, specializationId, content, mean, note, phonetic, examples, synonyms, antonyms } = contribution.content as any
        const { userId } = contribution
        let value: any
        if (contribution.type === 'word') {
          value = await this.wordService.create({ typeId, topicId, levelId, specializationId, content, mean, note, phonetic, synonyms, antonyms, userId, examples }, pictureFile)
        } else {
          value = await this.sentenceService.create({ typeId, topicId, content, mean, note, userId })
        }
        if (value.statusCode === 200) {
          await this.prismaService.contribution.update({ where: { id }, data: { status: CONTRIBUTION_STATUS.ACCEPT } })
          return new ResponseData<string>(null, 200, 'Duyệt thành công')
        }
        return value
      } else if (status === CONTRIBUTION_STATUS.REFUSE) {
        await this.prismaService.contribution.update({ where: { id }, data: { status: CONTRIBUTION_STATUS.REFUSE } })
        return new ResponseData<string>(null, 200, 'Từ chối thành công')
      }
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async remove(id: number) {
    try {
      const contribution = await this.findById(id)
      if (!contribution) return new ResponseData<Contribution>(null, 400, 'Đóng góp không tồn tại')
      return new ResponseData<Contribution>(await this.prismaService.contribution.delete({ where: { id } }), 200, 'Xóa thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findById(id: number) {
    const contribution = await this.prismaService.contribution.findUnique({ where: { id: id } })
    if (!contribution) return null
    contribution.content = JSON.parse(contribution.content as string)
    return contribution
  }
}