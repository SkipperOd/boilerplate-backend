import * as dotenv from "dotenv";
dotenv.config();

export const Config = {
  envrionment: process.env.NODE_ENV as string,
  sessionSecret: process.env.SECRET_SESSION as string,
  nodemailerFromEmail: process.env.NODE_MAILER_FROM as string,
};


