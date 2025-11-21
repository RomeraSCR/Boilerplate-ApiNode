import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors";
import { sendError } from "../utils/response";
import { config } from "../config/env";

export const errorHandler = (
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    sendError(res, err.message, err.statusCode);
    return;
  }

  // Erro não esperado
  const message =
    config.nodeEnv === "production"
      ? "Erro interno do servidor"
      : err.message;

  const errorDetails = config.nodeEnv === "development" ? err.stack : undefined;

  sendError(res, message, 500, errorDetails);
};

