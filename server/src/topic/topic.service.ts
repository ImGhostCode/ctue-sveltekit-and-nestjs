import { Injectable } from '@nestjs/common';
import { CreateTopicDto, UpdateTopicDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from '../global';
import { Topic } from '@prisma/client';

@Injectable()
export class TopicService {
  constructor(private prismaService: PrismaService) { }

  async create(createTopicDto: CreateTopicDto) {
    try {
      const isExisted = await this.IsExisted(createTopicDto.name)
      if (isExisted) return new ResponseData<string>(null, 400, 'Chủ đề đã tồn tại')
      return new ResponseData<Topic>(await this.prismaService.topic.create({ data: { ...createTopicDto } }), 200, 'Tạo chủ đề thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findAll() {
    try {
      return new ResponseData<Topic>(await this.prismaService.topic.findMany({}), 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async IsExisted(name: string) {
    const topic = await this.prismaService.topic.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive'
        }
      }
    })
    if (topic) return true
    return false
  }

  async findOne(id: number) {
    return await this.prismaService.topic.findUnique({ where: { id: id } })
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    try {
      const topic = await this.findOne(id)
      if (!topic) return new ResponseData<string>(null, 400, 'Không tìm thấy chủ đề')
      const isExisted = await this.IsExisted(updateTopicDto.name)
      if (isExisted) return new ResponseData<string>(null, 400, 'Chủ đề đã tồn tại')
      return new ResponseData<Topic>(await this.prismaService.topic.update({ where: { id }, data: { ...updateTopicDto } }), 200, 'Cập nhật thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async remove(id: number) {
    try {
      const topic = await this.findOne(id)
      if (!topic) return new ResponseData<string>(null, 400, 'Không tìm thấy chủ đề')
      return new ResponseData<any>(await this.prismaService.topic.delete({ where: { id } }), 200, 'Xóa thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }
}
