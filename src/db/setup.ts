import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";
import ConfigModule from "../config.module";

const connection = mysql.createConnection(ConfigModule.getOrThrow("DB_URL"));

export const db = drizzle(connection);
