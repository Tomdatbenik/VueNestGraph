import { Query, Resolver } from '@nestjs/graphql';
import Posts from '../db/enitities/posts.enitity';
import { PostsService } from './posts.service';

@Resolver((of) => Posts)
export class PostsResolver {
    constructor(private postsService: PostsService) { }

    @Query((returns => [Posts]))
    async getPosts() {
        return await this.postsService.findAll();
    }
}