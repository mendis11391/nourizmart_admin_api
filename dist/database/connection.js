"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const mysql_1 = __importDefault(require("mysql"));
const dbconfig_1 = require("./dbconfig");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "..", ".env") });
let selectedConfig;
if (process.env.ENVIRONMENT === "LOCAL") {
    selectedConfig = dbconfig_1.dbConfigDev;
}
else if (process.env.ENVIRONMENT === "DEV") {
    selectedConfig = dbconfig_1.dbConfigDev;
}
else if (process.env.ENVIRONMENT === "UAT") {
    selectedConfig = dbconfig_1.dbConfigUAT;
}
else {
    selectedConfig = dbconfig_1.dbConfig;
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
const pool = mysql_1.default.createPool(selectedConfig);
const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if (err)
                reject(err);
            else
                resolve(results);
        });
    });
};
exports.query = query;
//# sourceMappingURL=connection.js.map