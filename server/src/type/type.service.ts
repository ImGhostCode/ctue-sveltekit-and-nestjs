import { Injectable } from '@nestjs/common';
import { CreateTypeDto, UpdateTypeDto } from './dto';

@Injectable()
export class TypeService {
  create(createTypeDto: CreateTypeDto) {
    return 'This action adds a new type';
  }

  findAll() {
    return `This action returns all type`;
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
