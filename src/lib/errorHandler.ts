import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  TooManyRequestsError,
  UnauthenticatedError,
  UnauthorizedError,
  ValidationError,
} from "./errorDefinitions";

import { type Request, type Response, type NextFunction } from "express";
import { HttpStatus } from "./httpStatus";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status =
    err instanceof NotFoundError
      ? HttpStatus.NOT_FOUND
      : err instanceof BadRequestError
      ? HttpStatus.BAD_REQUEST
      : err instanceof UnauthenticatedError
      ? HttpStatus.UNATHENTICATED
      : err instanceof UnauthorizedError
      ? HttpStatus.UNAUTHORIZED
      : err instanceof ConflictError
      ? HttpStatus.CONFLICT
      : err instanceof TooManyRequestsError
      ? HttpStatus.TOO_MANY_REQUESTS
      : HttpStatus.BAD_REQUEST;

  const body = {
    success: false,
    message: err.message,
    ...(err instanceof ValidationError ? { errors: err.errors } : {}),
  };

  res.status(status).json(body);
}
