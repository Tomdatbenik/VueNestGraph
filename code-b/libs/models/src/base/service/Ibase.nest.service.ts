export interface IBaseService<T> {
  findAll(): Promise<T[]>;
}
