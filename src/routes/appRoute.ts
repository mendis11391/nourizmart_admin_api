import { Router } from "express";
import {
  getAppName,
  fetchCodeDictionaryValues,
} from "../controllers/appcontroller";

const appRoutes = Router();
appRoutes.get("/", getAppName);
appRoutes.get("/codeDictionary", fetchCodeDictionaryValues);
// appRoutes.get("/getUsers", appcontroller.getUsers);

export default appRoutes;
