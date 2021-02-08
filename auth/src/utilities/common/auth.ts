import { sign } from "jsonwebtoken";
import { Config } from "../../../src/constants/config/config";

export function refreshToken(id: string) {
  return sign({ userId: id }, Config.refreshTokenSecret, {
    expiresIn: "2min",
  });
}
export function accessToken(id: string) {
  return sign({ userId: id }, Config.accessTokenSecret, {
    expiresIn: "1min",
  });
}
