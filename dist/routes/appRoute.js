"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appcontroller_1 = require("../controllers/appcontroller");
const appRoutes = (0, express_1.Router)();
appRoutes.get("/", appcontroller_1.getAppName);
// appRoutes.get("/getUsers", appcontroller.getUsers);
exports.default = appRoutes;
//# sourceMappingURL=appRoute.js.map