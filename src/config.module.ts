import dotenv from "dotenv";
import { NotFoundError } from "./lib/errorDefinitions";

export default class ConfigModule {
  public static get(key: string) {
    dotenv.config();
    return process.env[key.toUpperCase()];
  }

  public static getOrThrow(key: string) {
    dotenv.config();
    const value = this.get(key.toUpperCase());
    if (!value) {
      throw new NotFoundError(
        `Missing environment variable: ${key.toUpperCase()}`
      );
    }
    return value;
  }
}
