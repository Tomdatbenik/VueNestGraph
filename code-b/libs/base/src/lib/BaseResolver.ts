import { InjectRepository } from '@nestjs/typeorm';
import { IBaseService } from '@code-b/models';
import { Type } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Repository } from 'typeorm';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver(classRef)
  abstract class BaseResolverHost {
    constructor(
      @InjectRepository(classRef)
      private repository: Repository<T>
    ) {}

    @Query((type) => [classRef], { name: `findAll${classRef.name}` })
    async findAll(): Promise<T[]> {
      return await this.repository.find();
    }
  }
  return BaseResolverHost;
}
