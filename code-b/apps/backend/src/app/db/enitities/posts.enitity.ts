import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { IPosts } from '@code-b/models';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
@Directive('@key(fields: "id")')
export default class Posts implements IPosts {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

}
