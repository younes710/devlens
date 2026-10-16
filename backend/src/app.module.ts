import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GithubModule } from './github/github.module.js';

@Module({
  imports: [GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
