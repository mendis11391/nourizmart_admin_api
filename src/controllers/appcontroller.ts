import { Request, Response } from "express";
import AppService from "../services/appService";
import { AuthenticatedRequest } from "../interface/authenticationRequestInterface";

const appService = new AppService();

export const getAppName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.json({
      app: process.env.APP_NAME,
      host: process.env.ENVIRONMENT,
      devdbhost: process.env.DEV_DB_HOST,
      devuser: process.env.DEV_DB_USER,
      devdbName: process.env.DEV_DB_NAME,
      uatdbhost: process.env.UAT_DB_HOST,
      uatuser: process.env.UAT_DB_USER,
      uatdbName: process.env.UAT_DB_NAME,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchCodeDictionaryValues = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const codeDictionaryValues = await appService.getCodeDictionaryValues();
    res.json(codeDictionaryValues);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
