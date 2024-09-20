import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { GenerateCarouselService } from './generate-carousel.service';

@Module({
  controllers: [ToolsController],
  providers: [GenerateCarouselService],
  exports: [GenerateCarouselService],
})
export class ToolsModule {}
