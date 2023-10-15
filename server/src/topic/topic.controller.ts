import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto, UpdateTopicDto } from './dto';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService) { }

  @Post()
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.topicService.create(createTopicDto);
  }

  @Get()
  findAll() {
    return this.topicService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.topicService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTopicDto: UpdateTopicDto) {
    return this.topicService.update(id, updateTopicDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.topicService.remove(id);
  }
}
