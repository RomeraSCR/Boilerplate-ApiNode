import { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/response";

export const notFoundHandler = (
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  sendError(res, `Rota ${req.method} ${req.path} não encontrada`, 404);
};

