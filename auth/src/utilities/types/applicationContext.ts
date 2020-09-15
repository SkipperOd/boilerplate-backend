import { Request, Response } from "express";
export interface ApplicationContext {
  req: Request;
  res: Response;
}
