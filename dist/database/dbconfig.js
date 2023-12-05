"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfigUAT = exports.dbConfigDev = exports.dbConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "..", ".env") });
exports.dbConfig = {
    host: process.env.LOCAL_DB_HOST,
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_NAME,
    connectTimeout: 30000,
};
exports.dbConfigDev = {
    host: process.env.DEV_DB_HOST,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    connectTimeout: 50000,
};
exports.dbConfigUAT = {
    host: process.env.UAT_DB_HOST,
    user: process.env.UAT_DB_USER,
    password: process.env.UAT_DB_PASSWORD,
    database: process.env.UAT_DB_NAME,
    connectTimeout: 50000,
};
//# sourceMappingURL=dbconfig.js.map