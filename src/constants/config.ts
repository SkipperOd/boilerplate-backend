import * as dotenv from "dotenv";
dotenv.config();




export class Config {
  sessionSecret: string;
  envrionment: string;
  constructor() {
    this.envrionment = process.env.NODE_ENV as string;
    this.sessionSecret = process.env.SECRET_SESSION as string;
  }
}
