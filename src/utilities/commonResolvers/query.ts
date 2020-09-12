import { ClassType, Resolver, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";

// Idea behind higher level resolvers is to make our code more generic
// and have code reuseability

export function Search<T extends ClassType, X extends ClassType>(
  name: string,
  returnType: T, // what will be the type of this function
  inputType: X,
  entity: any,
  Meta: any
) {
  @Resolver()
  class BaseSearchResolver {
    @Query(() => [returnType], { name: `search${name}` })
    async get(@Arg("data", () => inputType) data: any) {
      const repository = getRepository(entity);
      let meta = await Meta;
      let qb = repository.createQueryBuilder(meta.entity);
      if (data.which == "d") {
        qb.withDeleted();
        qb.where(`${meta.entity}.deletedAt is NOT NULL`);
      }
      if (data.search) {
        meta.searchParameters.forEach((searchParameter: any) => {
          qb.orWhere(`${meta.entity}.${searchParameter} ilike :searchTerm`, {
            searchTerm: `%${data.search}%`,
          });
        });
      }

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
  return BaseSearchResolver;
}

export function Get<T extends ClassType, X extends ClassType>(
  name: string,
  returnType: T, // what will be the type of this function
  inputType: X,
  entity: any,
  Meta: any
) {
  @Resolver()
  class BaseGetResolver {
    @Query(() => returnType, { name: `get${name}Id` })
    async get(@Arg("data", () => inputType) data: any) {
      const repository = getRepository(entity);
      let meta = await Meta;
      let qb = repository.createQueryBuilder(meta.entity);
      qb.where({
        id: data.id,
      });
      console.log(data);
      meta.relations.forEach((r: any) => {
        qb.leftJoinAndSelect(r.relationName, r.alias);
      });
      const result = await qb.getOne();
      console.log(result);

      return result;
    }
  }
  return BaseGetResolver;
}
