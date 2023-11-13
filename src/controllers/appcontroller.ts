import { Request, Response } from "express";

class AppController {
  getAppName(req: Request, res: Response) {
    res.json({
      app: process.env.APP_NAME,
      host: process.env.ENVIRONMENT,
    });
  }
}

export default new AppController();
