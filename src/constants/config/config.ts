import * as dotenv from "dotenv";
dotenv.config();

export const Config = {
  envrionment: process.env.NODE_ENV as string,
  backendPort:process.env.BACKEND_PORT as string,
  frontendPort:process.env.FRONTEND_PORT as string,
  sessionSecret: process.env.SECRET_SESSION as string,
  nodemailerFromEmail: process.env.NODE_MAILER_FROM as string,
  changePasswordLink: process.env.CHANGE_PASSWORD_LINK as string,
  confirmUserLink: process.env.CONFIRM_USER_LINK as string,
};
