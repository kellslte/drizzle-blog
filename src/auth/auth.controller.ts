import asyncHandler from "../lib/asyncHandler";
import requestValidator from "../lib/requestValidator";
import * as authService from "./auth.service";
import { type Request, type Response } from "express";
import { RegisterRequest } from "./requests/register.request";
import { ValidationError } from "../lib/errorDefinitions";
import { HttpStatus } from "../lib/httpStatus";
import { LoginRequest } from "./requests/login.request";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { value, errors } = requestValidator(RegisterRequest, req.body);
  if (errors)
    throw new ValidationError(
      "The request failed with the following error",
      errors
    );
  const user = await authService.createNewUser(value);
  res.status(HttpStatus.CREATED).json({
    success: true,
    message: "User created successfully",
    data: {
      user,
    },
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { value, errors } = requestValidator(LoginRequest, req.body);
  if (errors)
    throw new ValidationError(
      "The request failed with the following error",
      errors
    );
  const user = await authService.authenticateUser(value);
  res.status(HttpStatus.OK).json({
    success: true,
    message: "User logged in successfully",
    data: {
      user,
    },
  });
});
