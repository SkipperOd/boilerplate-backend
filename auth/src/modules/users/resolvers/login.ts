import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcript from "bcryptjs";
import { _User } from "../../../database/entities/_users";
import { LoginInput } from "../models/login";
import { _Profile } from "../../../database/entities/_profiles";
import { ApplicationContext } from "../../../utilities/types/applicationContext";
import { GetStatusText } from "../../../constants/responses/responsCode";
// import { IsAuthenticated } from "../middleware/isAuth";

// import { emailSender } from "../../utility/EmailSender";
// import { creatConfirmationalUrl } from "../../utility/creatConfirmationalUrl";

@Resolver()
export class LoginMutationResolver {
  @Mutation(() => _User, { nullable: true })
  async login(@Arg("data") person: LoginInput, @Ctx() ctx: ApplicationContext) {
    const user = await _User.findOne({
      where: {
        email: person.email,
      },
      relations: [
        "profile",
        "userRoles",
        "userRoles.roles",
        "userRoles.roles.rolesPermissions",
        "userRoles.roles.rolesPermissions.permissions",
      ],
    });

    if (!user) {
      throw new Error(GetStatusText("201"));
    }

    const password = await bcript.compare(person.password, user.password);

    if (!password) {
      throw new Error(GetStatusText("201"));
    }

    if(!user.confirmed){
      throw new Error(GetStatusText("203"));
    }
    
    // the exclaimation mark tells that the property is defind

    // Note: if this dosnt work that is it dosnt show in the application
    //tab of inspect element reason is in settings cog request.credentails isnt set to "include"

    ctx.req.session!.userId = user.id;
 
    return user;
  }
}
