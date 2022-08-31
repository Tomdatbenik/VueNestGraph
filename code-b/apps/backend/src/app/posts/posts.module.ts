import { DefaultCrudResolver } from '@code-b/base';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from '../db/enitities/posts.enitity';
import { PostsController } from './posts.controller';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Post])],
      resolvers: [{ DTOClass: Post, EntityClass: Post }],
    }),
  ],
  controllers: [PostsController],
  providers: [DefaultCrudResolver(Post)],
})
export class PostsModule {}
