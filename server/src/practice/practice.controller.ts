import { Controller } from '@nestjs/common';
import { PracticeService } from './practice.service';


@Controller('practice')
export class PracticeController {
    constructor(private practiceService: PracticeService) { }

}
