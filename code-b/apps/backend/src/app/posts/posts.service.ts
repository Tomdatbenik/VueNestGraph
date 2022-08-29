import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Posts from '../db/enitities/posts.enitity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts)
        private postsRepository: Repository<Posts>,) { }

    findAll(): Promise<Posts[]> {
        return this.postsRepository.find();
    }
}
