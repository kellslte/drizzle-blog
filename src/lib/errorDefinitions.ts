import { HttpStatus } from "./httpStatus";

export class NotFoundError extends Error {
  public readonly statusCode: number;

  constructor(public message: string) {
    super(message);
    this.statusCode = HttpStatus.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  public readonly statusCode: number;

  constructor(public message: string) {
    super(message);
    this.statusCode = HttpStatus.BAD_REQUEST;
  }
}

export class UnauthorizedError extends Error {
  public readonly statusCode: number;

  constructor(public message: string) {
    super(message);
    this.statusCode = HttpStatus.UNAUTHORIZED;
  }
}

export class UnauthenticatedError extends Error {
  public readonly statusCode: number;

  constructor(public message: string) {
    super(message);
    this.statusCode = HttpStatus.UNATHENTICATED;
  }
}

export class ConflictError extends Error {
  public readonly statusCode: number;

  constructor(public message: string) {
    super(message);
    this.statusCode = HttpStatus.CONFLICT;
  }
}

export class TooManyRequestsError extends Error {
  public readonly statusCode: number;

  constructor(public message: string) {
    super(message);
    this.statusCode = HttpStatus.TOO_MANY_REQUESTS;
  }
}

export class ValidationError extends Error {
  public readonly statusCode: number;

  constructor(public message: string, public errors: any) {
    super(message);
    this.statusCode = HttpStatus.BAD_REQUEST;
  }
}
