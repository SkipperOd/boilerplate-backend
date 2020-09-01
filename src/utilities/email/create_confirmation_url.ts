import { v4 } from "uuid";
import { redis } from "../../redis";
import { changePassword, registerConfirmation } from "../../constants/prefixes";

export const creatConfirmationalUrl = (userId: string) => {
  //creating redis key value
  const token = v4();
  redis.set(registerConfirmation + token, userId, "ex", 60 * 60 * 24); // 1 day expiration

  return `http://localhost:4500/user/confirm/${token}`;
};
export const creatForgotPasswordUrl = (userId: string) => {
  //creating redis key value
  const token = v4();
  redis.set(changePassword + token, userId, "ex", 60 * 60 * 24); // 1 day expiration

  return `http://localhost:4500/user/change-password/${token}`;
};