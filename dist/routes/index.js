"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const appRoute_1 = __importDefault(require("./appRoute"));
const adminRoutes_1 = __importDefault(require("./adminRoutes"));
class AppRoute {
    useRoute(app) {
        app.use("/admin", adminRoutes_1.default);
        app.use("/", appRoute_1.default);
    }
}
exports.default = AppRoute;
//# sourceMappingURL=index.js.map