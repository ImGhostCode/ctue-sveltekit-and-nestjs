import { Injectable } from '@nestjs/common';
import { CreateIrregularVerbDto, UpdateIrregularVerbDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from '../global';
import { IrregularVerb } from '@prisma/client';

@Injectable()
export class IrregularVerbService {
  constructor(private prismaService: PrismaService) { }

  async create(createIrregularVerbDto: CreateIrregularVerbDto) {
    try {
      const isExisted = await this.isExisted(createIrregularVerbDto.v1)
      if (isExisted) return new ResponseData<string>(null, 400, 'Động từ đã tồn tại')
      return new ResponseData<IrregularVerb>(await this.prismaService.irregularVerb.create({
        data: {
          v1: createIrregularVerbDto.v1,
          v2: createIrregularVerbDto.v2,
          v3: createIrregularVerbDto.v3,
          mean: createIrregularVerbDto.mean
        }
      }), 200, 'Tạo thành công đọngo từ')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findAll() {
    try {
      return new ResponseData<IrregularVerb>(await this.prismaService.irregularVerb.findMany({}), 200, 'Tìm thành công')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async findOne(id: number) {
    try {
      const verb = await this.findById(id)
      if (!verb) return new ResponseData<string>(null, 400, 'Động từ không tồn tại')
      return new ResponseData<IrregularVerb>(verb, 200, 'Tìm thành công động từ')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async update(id: number, updateIrregularVerbDto: UpdateIrregularVerbDto) {
    try {
      const verb = await this.findById(id)
      if (!verb) return new ResponseData<string>(null, 400, 'Động từ không tồn tại')
      if (updateIrregularVerbDto.v1) {
        const isExisted = await this.isExisted(updateIrregularVerbDto.v1)
        if (isExisted) return new ResponseData<string>(null, 400, 'Động từ đã tồn tại')
      }
      return new ResponseData<IrregularVerb>(await this.prismaService.irregularVerb.update({
        where: {
          id: id
        },
        data: {
          v1: updateIrregularVerbDto.v1,
          v2: updateIrregularVerbDto.v2,
          v3: updateIrregularVerbDto.v3,
          mean: updateIrregularVerbDto.mean
        }
      }), 200, 'Cập nhật thành công động từ')
    } catch (error) {
      return new ResponseData<string>(null, 500, 'Lỗi dịch vụ, thử lại sau')
    }
  }

  async remove(id: number) {
    const verb = await this.findById(id)
    if (!verb) return new ResponseData<string>(null, 400, 'Động từ không tồn tại')
    await this.prismaService.irregularVerb.delete({ where: { id } })
    return new ResponseData<string>(null, 200, 'Xóa thành công động từ')
  }

  async isExisted(content: string) {
    const verb = await this.prismaService.irregularVerb.findFirst({
      where: {
        v1: {
          equals: content,
          mode: 'insensitive'
        }
      }
    })
    if (verb) return true
    return false
  }

  async findById(id: number) {
    return this.prismaService.irregularVerb.findUnique({ where: { id } })
  }
}
