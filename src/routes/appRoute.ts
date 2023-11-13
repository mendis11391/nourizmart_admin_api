import { Router } from "express";
import appcontroller from "../controllers/appcontroller";

const appRoutes = Router();

appRoutes.get("/", appcontroller.getAppName);

export default appRoutes;
