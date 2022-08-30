import { IBaseService } from '@code-b/models';
import { Injectable, Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


export function BaseService<T extends Type<unknown>>(classRef: T): any {
  abstract class BaseService {
    constructor(
      @InjectRepository(classRef)
      private repository: Repository<T>
    ) {}
  
    findAll(): Promise<T[]> {
      return this.repository.find();
    }
  }
  return BaseService;
}



