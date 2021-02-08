import { ApplicationContext } from "../../../utilities/types/applicationContext";
import { MiddlewareFn } from "type-graphql";
import { GetStatusText } from "../../../constants/responses/responsCode";
import { _User } from "../../../../src/database/entities/_users";
import { verify } from "jsonwebtoken";
import { Config } from "../../../../src/constants/config/config";
import {
  accessToken,
  refreshToken,
} from "../../../../src/utilities/common/auth";
export const IsAuthenticated: MiddlewareFn<ApplicationContext> = async (
  { context },
  next
) => {
  let authToken = context.req.cookies["access-token"];
  let refToken = context.req.cookies["refresh-token"];
  
  let expired: Boolean = false;
  try {
    verify(authToken, Config.accessTokenSecret);
  } catch {
    console.log("token expired");
    expired = true;
  }
  if (expired) {
    console.log("in expired");
    try {
      verify(refToken, Config.refreshTokenSecret);
      let expUser = await getUserByToken(refToken, "ref");
      expUser!.authToken = accessToken(expUser!.id);
      expUser!.refreshToken = refreshToken(expUser!.id);
      await _User.save(expUser!);
    } catch {
      throw new Error("Refresh Token Expired");
    }
  }

  let user = await getUserByToken(authToken, "auth");
  // console.log(user);
  if (!user)
    throw new Error(
      GetStatusText("208") + " " + GetStatusText("207").toLowerCase()
    );
  context.user = user;
  await next();
};

async function getUserByToken(token: string, type: string) {
  if (type == "auth") {
    return await _User.findOne({
      where: {
        authToken: token,
      },
    });
  } else {
    return await _User.findOne({
      where: {
        refreshToken: token,
      },
    });
  }
}
