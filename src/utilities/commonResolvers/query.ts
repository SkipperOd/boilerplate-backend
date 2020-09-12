import { ClassType, Resolver, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";
// import { isEmpty } from "class-validator";
// import { isNull } from "util";
// import { IsNotEmpty } from "class-validator";
// import { MetaData } from "../../../src/constants/entity/relationsConfig";

// Idea behind higher level resolvers is to make our code more generic
// and have code reuseability

export function Search<T extends ClassType, X extends ClassType>(
  name: string,
  returnType: T, // what will be the type of this function
  inputType: X,
  entity: any,
  relationMeta: any
) {
  @Resolver()
  class BaseSearchResolver {
    @Query(() => [returnType], { name: `search${name}` })
    async get(@Arg("data", () => inputType) data: any) {
      const repository = getRepository(entity);
      console.log(data.order.direction);
      let meta = await relationMeta;
      let qb = repository.createQueryBuilder(meta.entity);
      if (data.which == "d") {
        qb.withDeleted();
        qb.where(`${meta.entity}.deletedAt is NOT NULL`);
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
  relationMeta: any
) {
  @Resolver()
  class BaseGetResolver {
    @Query(() => returnType, { name: `get${name}Id` })
    async get(@Arg("data", () => inputType) data: any) {
      const repository = getRepository(entity);
      let meta = await relationMeta;
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
