import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../utils/errors";

export const validateRequest = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  // Validação básica de JSON
  if (req.is("application/json") && Object.keys(req.body).length === 0) {
    throw new BadRequestError("Corpo da requisição não pode estar vazio");
  }
  next();
};

// Middleware para validar parâmetros de paginação
export const validatePagination = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  if (page < 1) {
    throw new BadRequestError("Página deve ser maior que 0");
  }

  if (limit < 1 || limit > 100) {
    throw new BadRequestError("Limite deve estar entre 1 e 100");
  }

  req.query.page = page.toString();
  req.query.limit = limit.toString();

  next();
};

