import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IPosts } from '@code-b/models';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base';
@InputType('postsInput')
@Entity()
@ObjectType('postsType')
export default class Posts extends BaseEntity implements IPosts {
    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    description: string;

}