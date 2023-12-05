import mysql from "mysql";
import { dbConfig, dbConfigDev, dbConfigUAT } from "./dbconfig";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

let selectedConfig: any;

if (process.env.ENVIRONMENT === "LOCAL") {
  selectedConfig = dbConfigDev;
} else if (process.env.ENVIRONMENT === "DEV") {
  selectedConfig = dbConfigDev;
} else if (process.env.ENVIRONMENT === "UAT") {
  selectedConfig = dbConfigUAT;
} else {
  selectedConfig = dbConfig;
}

// export async function connectToDatabase(): Promise<mysql.Connection> {
//   const connection = mysql.createConnection(selectedConfig);

//   await connection.connect();
//   return connection;
// }

// export async function query(
//   connection: mysql.Connection,
//   sql: string,
//   values?: any[]
// ): Promise<any> {
//   return new Promise((resolve, reject) => {
//     connection.query(sql, values, (err: any, result: any) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// }

const pool = mysql.createPool(selectedConfig);

export const query = (sql: string, values?: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
