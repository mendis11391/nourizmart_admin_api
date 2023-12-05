const jwt = require("jsonwebtoken");
import { Request, Response } from "express";
import AppService from "../services/appService";

export const getAppName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.json({
      app: process.env.APP_NAME,
      host: process.env.ENVIRONMENT,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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
