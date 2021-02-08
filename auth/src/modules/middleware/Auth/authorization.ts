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
export const IsAuthorized: MiddlewareFn<ApplicationContext> = async (
  { root},
  next
) => {
  console.log(root)
  // let unique = context.entitiesCalled.filter( onlyUnique);

  // console.log(unique);

  await next();
};
// async function onlyUnique(value: any, index: any, self: any) {
//   return self.indexOf(value) === index;
// }
