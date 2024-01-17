import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

export const dbConfig = {
  host: process.env.LOCAL_DB_HOST,
  user: process.env.LOCAL_DB_USER,
  password: process.env.LOCAL_DB_PASSWORD,
  database: process.env.LOCAL_DB_NAME,
  connectTimeout: 30000,
};

export const dbConfigDev = {
  host: process.env.DEV_DB_HOST,
  user: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_NAME,
  connectTimeout: 50000,
};

export const dbConfigUAT = {
  host: process.env.UAT_DB_HOST,
  user: process.env.UAT_DB_USER,
  password: process.env.UAT_DB_PASSWORD,
  database: process.env.UAT_DB_NAME,
  connectTimeout: 50000,
};
