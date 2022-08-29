import { Query, Resolver } from '@nestjs/graphql';
import Posts from '../db/enitities/posts.enitity';

@Resolver((of) => Posts)
export class PostsResolver {

    @Query(returns => String)
    async Post() {
        return 'foo';
    }
}