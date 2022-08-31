import { InjectRepository } from '@nestjs/typeorm';
import { BadGatewayException, NotFoundException, Type } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Repository, FindOneOptions, DeleteResult } from 'typeorm';


export function DefaultCrudResolver<T extends Type<any>>(classRef: T): any {
  @Resolver(classRef)
  abstract class BaseResolverHost {
    constructor(@InjectRepository(classRef)
    private repository: Repository<T>) { }

    @Query((type) => classRef || null, { name: `findOne${classRef.name}` })
    async findOne(@Args(`searchId${classRef.name}`, { type: () => Int }) id: number): Promise<T> {
      try {
        return await this.repository.findOneOrFail({ where: { id: id } } as FindOneOptions)

      } catch (error) {
        throw new BadGatewayException(error);
      }
    }

    @Query((type) => [classRef], { name: `findAll${classRef.name}` })
    findAll(): Promise<T[]> {
      return this.repository.find();
    }

    @Mutation(returns => classRef)
    async update(
      @Args(`id`, { type: () => Int }) id: number,
      @Args(`update${classRef.name}`, { type: () => classRef }) entity: T
    )
      : Promise<T> {
      try {
        const result: T | null = await this.repository.findOne({ where: { id: id } } as FindOneOptions);
        if (result == null) throw new NotFoundException("404 entity not found");

        const mergeEntity: T = Object.assign(result, entity);
        const response: T = await this.repository.save(mergeEntity);

        return response;
      } catch (error) {
        throw new BadGatewayException(error);
      }
    }

    @Mutation(returns => classRef)
    save(@Args(`save${classRef.name}`, { type: () => classRef }) entity: T): Promise<T> {
      try {
        return this.repository.save(entity);
      } catch (error) {
        throw new BadGatewayException(error);
      }
    }

    @Mutation(returns => classRef, { nullable: true })
    delete(
      @Args(`id`, { type: () => Int }) id: number,
    ): void {
      try {
        this.repository.delete(id);
      } catch (error) {
        throw new BadGatewayException(error);
      }
    }


  }
  return BaseResolverHost;
}

