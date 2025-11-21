import { Request, Response, NextFunction } from "express";
import { AsyncRequestHandler } from "../types";

export const asyncHandler = (fn: AsyncRequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

