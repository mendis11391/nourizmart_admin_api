import mysql from "mysql";
import { dbConfig, dbConfigDev, dbConfigUAT } from "./dbconfig";
import os from "os";
import dotenv from "dotenv";

const hostname = os.hostname();
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

let selectedConfig;

if (process.env.ENVIRONMENT === "LOCAL") {
  selectedConfig = dbConfigDev;
} else if (process.env.ENVIRONMENT === "DEV") {
  selectedConfig = dbConfigDev;
} else if (process.env.ENVIRONMENT === "UAT") {
  selectedConfig = dbConfigUAT;
} else {
  selectedConfig = dbConfig;
}

const pool = mysql.createPool(selectedConfig);

export default pool;
// if (hostname === "server681.iseencloud.com")
