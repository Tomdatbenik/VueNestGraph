import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IPosts as IPost } from '@code-b/models';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base';
import { FilterableField } from '@nestjs-query/query-graphql';


@InputType('postsInput')
@Entity()
@ObjectType('post')
export default class Post extends BaseEntity implements IPost {
    @Column()
    @Field()
    @FilterableField()
    title: string;

    @Column()
    @Field()
    @FilterableField()
    description: string;

}