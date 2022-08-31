import { PrimaryGeneratedColumn } from "typeorm";
import { IsOptional } from 'class-validator';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseEntity {
    @IsOptional()
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

}