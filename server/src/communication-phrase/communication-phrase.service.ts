import { Injectable } from '@nestjs/common';
import { CreateCommunicationPhraseDto, UpdateCommunicationPhraseDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from '../global';
import { CommunicationPhrase } from '@prisma/client';

@Injectable()
export class CommunicationPhraseService {
  constructor(private prismaService: PrismaService) { }

  async create(createCommunicationPhraseDto: CreateCommunicationPhraseDto) {
    try {
      const isExisted = await this.isExisted(createCommunicationPhraseDto.content)
      if (isExisted) return new ResponseData<string>(null, 400, 'Câu đã tồn tại')
      return new ResponseData<CommunicationPhrase>(await this.prismaService.communicationPhrase.create({ data: { ...createCommunicationPhraseDto } }), 200, 'Tạo thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findAll() {
    try {
      return new ResponseData<CommunicationPhrase>(await this.prismaService.communicationPhrase.findMany({}), 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findOne(id: number) {
    try {
      const sentence = await this.findById(id)
      if (!sentence) return new ResponseData<string>(null, 400, 'Câu không tồn tại')
      return new ResponseData<CommunicationPhrase>(sentence, 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async update(id: number, updateCommunicationPhraseDto: UpdateCommunicationPhraseDto) {
    try {
      const sentence = await this.findById(id)
      if (!sentence) return new ResponseData<string>(null, 400, 'Câu không tồn tại')
      if (updateCommunicationPhraseDto.content) {
        const isExisted = await this.isExisted(updateCommunicationPhraseDto.content)
        if (isExisted) return new ResponseData<string>(null, 400, 'Câu đã tồn tại')
      }
      return new ResponseData<CommunicationPhrase>(await this.prismaService.communicationPhrase.update({ where: { id }, data: { ...updateCommunicationPhraseDto } }), 200, 'Cập nhật thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async remove(id: number) {
    const sentence = await this.findById(id)
    if (!sentence) return new ResponseData<string>(null, 400, 'Câu không tồn tại')
    await this.prismaService.communicationPhrase.delete({ where: { id } })
    return new ResponseData<string>(null, 200, 'Xóa thành công')
  }

  async isExisted(content: string) {
    const sentence = await this.prismaService.communicationPhrase.findFirst({
      where: {
        content: {
          equals: content,
          mode: 'insensitive'
        }
      }
    })
    if (sentence) return true
    return false
  }

  async findById(id: number) {
    return this.prismaService.communicationPhrase.findUnique({ where: { id } })
  }
}
