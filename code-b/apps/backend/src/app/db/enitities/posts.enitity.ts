import { Field, ObjectType } from '@nestjs/graphql';
import { IPosts } from '@code-b/models';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export default class Posts implements IPosts {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    description: string;

}
