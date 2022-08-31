import { PrimaryGeneratedColumn } from "typeorm";
import { IsOptional } from 'class-validator';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IDField } from "@nestjs-query/query-graphql";

@ObjectType()
export abstract class BaseEntity {
    @IsOptional()
    @IDField(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

}