import { Resolver, Mutation, Ctx, UseMiddleware } from "type-graphql";
import { ApplicationContext } from "../../../utilities/types/applicationContext";
import { IsAuthenticated } from "../../../../src/modules/middleware/Auth/authentication";

@Resolver()
export class LogoutMutationResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(IsAuthenticated)
  async logout(@Ctx() ctx: ApplicationContext) {
    return new Promise((res, rej) =>
      ctx.req.session?.destroy((err) => {
        if (err) {
          console.log(err);
          return rej(false);
        }
        ctx.res.clearCookie("");
        return res(true);
      })
    );
  }
}
