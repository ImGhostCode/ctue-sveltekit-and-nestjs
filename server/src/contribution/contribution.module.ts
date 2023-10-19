import { Module } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { ContributionController } from './contribution.controller';
import { WordService } from '../word/word.service';
import { SentenceService } from '../sentence/sentence.service';

@Module({
  controllers: [ContributionController],
  providers: [ContributionService, WordService, SentenceService],
})
export class ContributionModule { }
