import { Injectable } from '@nestjs/common';
import { CreateSpecializationDto, UpdateSpecializationDto } from './dto';

@Injectable()
export class SpecializationService {
  create(createSpecializationDto: CreateSpecializationDto) {
    return 'This action adds a new specialization';
  }

  findAll() {
    return `This action returns all specialization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialization`;
  }

  update(id: number, updateSpecializationDto: UpdateSpecializationDto) {
    return `This action updates a #${id} specialization`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialization`;
  }
}
