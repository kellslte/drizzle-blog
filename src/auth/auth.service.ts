import jwt from "jsonwebtoken";
import type { AuthUserPayload } from "../lib/types";
import ConfigModule from "../config.module";

const generateToken = (payload: AuthUserPayload) => {
  const token = jwt.sign(payload, ConfigModule.getOrThrow("JWT_SECRET"), {
    expiresIn: ConfigModule.getOrThrow("JWT_EXPIRES_IN"),
  });
  return token;
};

export const authenticateUser = async (payload: any) => {};

export const createNewUser = async (payload: any) => {};

export const getAuthenticatedUser = async () => {};
