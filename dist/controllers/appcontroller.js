"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppName = void 0;
const jwt = require("jsonwebtoken");
const getAppName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            app: process.env.APP_NAME,
            host: process.env.ENVIRONMENT,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAppName = getAppName;
// export class AppController {
//   static async getAppName(req: Request, res: Response) {
//     res.json({
//       app: process.env.APP_NAME,
//       host: process.env.ENVIRONMENT,
//     });
//   }
//   static async getUsers(req: Request, res: Response) {
//     const result = await AppService.getUsers();
//     if (result[0]) {
//       const accessToken = jwt.sign(
//         { username: "Testdata" },
//         process.env.ACCESS_TOKEN_SECRET
//       );
//       res.json({ accessToken: accessToken, data: result[0] });
//     } else {
//       res.json({ accessToken: null });
//     }
//   }
//   /**
//    * Admin login
//    */
//   static async adminLogin(req: Request, res: Response) {
//     const reqParam = {
//       username: req.body.username,
//       password: req.body.password,
//     };
//     const result = await AppService.adminUserLogin(reqParam);
//     if (result[0].result) {
//       const accessToken = jwt.sign(
//         { username: reqParam.username },
//         process.env.ACCESS_TOKEN_SECRET
//       );
//       res.json({ accessToken: accessToken });
//     } else {
//       res.json({ accessToken: null });
//     }
//   }
// }
// export default AppController;
//# sourceMappingURL=appcontroller.js.map