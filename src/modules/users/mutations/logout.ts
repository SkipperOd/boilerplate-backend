import { Resolver, Mutation, Ctx } from "type-graphql";
import { ApplicationContext } from "../../../utilities/types/application_context";

@Resolver()
export class LogoutMutationResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: ApplicationContext) {
    return new Promise((res, rej) =>
      ctx.req.session?.destroy((err) => {
        if (err) {
          console.log(err);
          return rej(false);
        }
        ctx.res.clearCookie("qid");
        return res(true);
      })
    );
  }
}
