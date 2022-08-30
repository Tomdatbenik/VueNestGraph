import { BaseResolver } from '@code-b/base';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Posts from '../db/enitities/posts.enitity';
import { PostsController } from './posts.controller';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [PostsController],
  providers: [PostsResolver, BaseResolver(Posts), PostsService],
})
export class PostsModule {}
