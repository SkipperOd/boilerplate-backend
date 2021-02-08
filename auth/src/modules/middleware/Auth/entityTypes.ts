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
export const GetEntityTypes: MiddlewareFn<ApplicationContext> = async (
  { context, info },
  next
) => {
  context.entitiesCalled.push(info.parentType.name);
  await next();
  
};
