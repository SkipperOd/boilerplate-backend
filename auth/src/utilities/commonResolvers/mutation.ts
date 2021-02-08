import { IsAuthorized } from "../../../src/modules/middleware/Auth/authorization";
import {
  ClassType,
  Resolver,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { getConnection, getRepository } from "typeorm";
import { IsAuthenticated } from "../../../src/modules/middleware/Auth/authentication";
import { ApplicationContext } from "../types/applicationContext";
// import { getRepository } from "typeorm";
// import { MetaData } from "../../../src/constants/entity/relationsConfig";

// Idea behind higher level resolvers is to make our code more generic
// and have code reuseability

export function Create<X extends ClassType, T extends ClassType>(
  name: string,
  returnType: T, // what will be the type of this function
  inputType: X,
  entity: any
) {
  @Resolver()
  class BaseCreateResolver {
    @Mutation(() => [returnType], { name: `create${name}` })
    @UseMiddleware(IsAuthenticated,IsAuthorized)
    async create(
      @Arg("data", () => [inputType]) data: any,
      @Ctx() ctx: ApplicationContext
    ) {
      console.log(ctx);
      const inserted = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(entity)
        .values(data)
        .execute();
      const repository = getRepository(entity);
      let qb = repository.createQueryBuilder();
      qb.where(inserted.identifiers);
      const result = await qb.getMany();
      return result;
    }
  }
  return BaseCreateResolver;
}

export function Update<T extends ClassType, X extends ClassType>(
  name: string,
  returnType: T, // what will be the type of this function
  inputType: X,
  entity: any
) {
  @Resolver()
  class BaseUpdateResolver {
    @Mutation(() => returnType, { name: `update${name}` })
    @UseMiddleware(IsAuthenticated)
    async update(
      @Arg("data", () => inputType) data: any,
      @Ctx() ctx: ApplicationContext
    ) {
      console.log(ctx);
      const updated = await getConnection()
        .createQueryBuilder()
        .update(entity)
        .set(data)
        .where({ id: data.id })
        .execute();
      console.log(updated);
      const repository = getRepository(entity);
      let qb = repository.createQueryBuilder();
      qb.where({ id: data.id });
      const result = await qb.getOne();
      console.log(result);
      return result;
    }
  }
  return BaseUpdateResolver;
}
export function Delete<X extends ClassType>(
  name: string,
  inputType: X,
  entity: any
) {
  @Resolver()
  class BaseDeleteResolver {
    @Mutation(() => String, { name: `delete${name}` })
    @UseMiddleware(IsAuthenticated)
    async update(
      @Arg("data", () => inputType) data: any,
      @Ctx() ctx: ApplicationContext
    ) {
      console.log(ctx);
      const deleted = await getConnection()
        .createQueryBuilder()
        .delete()
        .from(entity)
        .where({ id: data.id })
        .execute()
        .then((succ) => {
          if (succ.affected) {
            if (succ.affected > 0) {
              return "Deleted";
            }
            return "Not Deleted";
          } else {
            return "record not found";
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return deleted;
    }
  }
  return BaseDeleteResolver;
}
export function SoftDelete<X extends ClassType>(
  name: string,
  inputType: X,
  entity: any
) {
  @Resolver()
  class BaseSoftDeleteResolver {
    @Mutation(() => String, { name: `softDelete${name}` })
    @UseMiddleware(IsAuthenticated)
    async update(
      @Arg("data", () => inputType) data: any,
      @Ctx() ctx: ApplicationContext
    ) {
      console.log(ctx);
      const deleted = await getConnection()
        .createQueryBuilder()
        .softDelete()
        .from(entity)
        .where({ id: data.id })
        .execute()
        .then((succ) => {
          if (succ.affected) {
            if (succ.affected > 0) {
              return "Deleted";
            }
            return "Not Deleted";
          } else {
            return "record not found";
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return deleted;
    }
  }
  return BaseSoftDeleteResolver;
}
export function Restore<X extends ClassType>(
  name: string,
  inputType: X,
  entity: any
) {
  @Resolver()
  class BaseRestoreDeletedResolver {
    @Mutation(() => String, { name: `restoreDeleted${name}` })
    @UseMiddleware(IsAuthenticated)
    async restore(
      @Arg("data", () => inputType) data: any,
      @Ctx() ctx: ApplicationContext
    ) {
      console.log(ctx);
      const restored = await getConnection()
        .createQueryBuilder()
        .restore()
        .from(entity)
        .where({ id: data.id })
        .execute();
      console.log(restored);
      return "done";
    }
  }
  return BaseRestoreDeletedResolver;
}

// export function CreateRelation<X extends ClassType, T extends ClassType,Y extends ClassType>(
//   name: string,
//   returnType: T, // what will be the type of this function
//   inputType: X,
//   relations: [Y],
//   entity: any
// ) {
//   @Resolver()
//   class BaseCreateResolver {
//     @Mutation(() => [returnType], { name: `create${name}` })
//     async create(@Arg("data", () => [inputType]) data: any) {
//       const mainEntity = getRepository(entity)
//       relations.forEach(relation => {

//       });

//       // const inserted = await getConnection()
//       //   .createQueryBuilder()
//       //   .insert()
//       //   .into(entity)
//       //   .values(data)
//       //   .execute();
//       // const repository = getRepository(entity);
//       // let qb = repository.createQueryBuilder();
//       // qb.where(inserted.identifiers);
//       // const result = await qb.getMany();
//       return result;
//     }
//   }
//   return BaseCreateResolver;
// }
