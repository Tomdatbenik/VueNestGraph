export interface IBaseService {
    findOne(id: number): Promise<T>;
    findAll(): Promise<T[]>;
    update(id: number, entity: T): Promise<T>;
    save(entity: T): Promise<T>;
    delete(id: number): Promise<T>;

}