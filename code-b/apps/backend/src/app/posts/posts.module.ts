import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Posts from '../db/enitities/posts.enitity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Posts])],
    controllers: [PostsController],
    providers: [PostsService, PostsResolver],
})
export class PostsModule { }
