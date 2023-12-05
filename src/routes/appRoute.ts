import { Router } from "express";
import { getAppName } from "../controllers/appcontroller";

const appRoutes = Router();
appRoutes.get("/", getAppName);
// appRoutes.get("/getUsers", appcontroller.getUsers);

export default appRoutes;
