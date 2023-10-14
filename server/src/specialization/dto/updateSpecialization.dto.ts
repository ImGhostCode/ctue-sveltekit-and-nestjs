import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecializationDto } from './createSpecialization.dto';

export class UpdateSpecializationDto extends PartialType(CreateSpecializationDto) { }
