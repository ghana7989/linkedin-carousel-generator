import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [UserModule, ToolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
