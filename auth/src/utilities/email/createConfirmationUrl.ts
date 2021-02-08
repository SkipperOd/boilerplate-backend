// import { v4 } from "uuid";
// // import { redis } from "../../redis";
// // import { changePassword, registerConfirmation } from "../../constants/prefixes";
// import { Config } from "../../constants/config/config";

// export const creatConfirmationalUrl = (userId: string) => {
//   //creating redis key value
//   const token = v4();
//   // redis.set(registerConfirmation + token, userId, "ex", 60 * 60 * 24); // 1 day expiration

//   return `${Config.confirmUserLink}/${token}`;
//   // return `http://localhost:4500/user/confirm/${token}`;
// };
// export const creatForgotPasswordUrl = (userId: string) => {
//   //creating redis key value
//   const token = v4();
//   // redis.set(changePassword + token, userId, "ex", 60 * 60 * 24); // 1 day expiration
//   return `${Config.changePasswordLink}/${token}`;
//   // return `http://localhost:4500/user/change-password/${token}`;
// };
