import { ClassType, Resolver, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";
// import { MetaData } from "../../../src/constants/entity/relationsConfig";

// Idea behind higher level resolvers is to make our code more generic
// and have code reuseability
export function GetAllResolver<T extends ClassType, X extends ClassType>(
  name: string,
  returnType: T, // what will be the type of this function
  inputType: X,
  entity: any,
  relationMeta: any
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Query(() => [returnType], { name: `getAll${name}` })
    async get(@Arg("data", () => inputType) data: any) {
      const repository = getRepository(entity);
      console.log(data.order.direction);
      let meta = await relationMeta;
      let qb = repository.createQueryBuilder(meta.entity);

      qb.where({ isDeleted: false });
      qb.take(data.pagination.take);
      qb.skip(data.pagination.skip);
      qb.take(data.pagination.take);
      qb.orderBy(
        `${meta.entity}.${data.order.fieldName}`,
        data.order.direction
      );
      meta.relations.forEach((r: any) => {
        qb.leftJoinAndSelect(r.relationName, r.alias);
      });

      const result = await qb.getMany();
      console.log(result);

      return result;
    }
  }
  return BaseResolver;
}
export function GetByPropertyResolver<T extends ClassType, X extends ClassType>(
  name: string,
  returnType: T, // what will be the type of this function
  inputType: X,
  entity: any,
  relationMeta: any
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Query(() => returnType, { name: `getBy${name}Id` })
    async get(@Arg("data", () => inputType) data: any) {
      const repository = getRepository(entity);
      let meta = await relationMeta;
      let qb = repository.createQueryBuilder(meta.entity);
      qb.where({ isDeleted: false });
      qb.whereInIds({data});
      meta.relations.forEach((r: any) => {
        qb.leftJoinAndSelect(r.relationName, r.alias);
      });
      const result = await qb.getMany();
      console.log(result);

      return result;
    }
  }
  return BaseResolver;
}