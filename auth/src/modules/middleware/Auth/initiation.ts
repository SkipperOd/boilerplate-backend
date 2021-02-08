import { ApplicationContext } from "../../../utilities/types/applicationContext";
import { MiddlewareFn } from "type-graphql";
// import { GetStatusText } from "../../../constants/responses/responsCode";
// import { _User } from "../../../database/entities/_users";
// import { verify } from "jsonwebtoken";
// import { Config } from "../../../constants/config/config";
// import {
//   accessToken,
//   refreshToken,
// } from "../../../utilities/common/auth";
export const Initiation: MiddlewareFn<ApplicationContext> = async (
  { context },
  next
) => {
  context.entitiesCalled = [];
  await next();
};
