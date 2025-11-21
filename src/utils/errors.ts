import { ApiError } from "../types";

export class AppError extends Error implements ApiError {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Recurso não encontrado") {
    super(message, 404);
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = "Requisição inválida") {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Não autorizado") {
    super(message, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Acesso negado") {
    super(message, 403);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = "Conflito de recursos") {
    super(message, 409);
  }
}

