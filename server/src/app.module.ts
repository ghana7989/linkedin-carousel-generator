import { Module } from '@nestjs/common';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [ToolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
