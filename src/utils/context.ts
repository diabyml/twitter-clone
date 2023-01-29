import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export interface MyContext {
  prisma: PrismaClient;
  req: Request;
  res: Response;
}
