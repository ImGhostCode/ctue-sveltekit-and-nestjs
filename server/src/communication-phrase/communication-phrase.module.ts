import { Module } from '@nestjs/common';
import { CommunicationPhraseService } from './communication-phrase.service';
import { CommunicationPhraseController } from './communication-phrase.controller';

@Module({
  controllers: [CommunicationPhraseController],
  providers: [CommunicationPhraseService],
})
export class CommunicationPhraseModule {}
