import { Router } from "express";
import adminController from "../controllers/adminController";

const adminRoutes = Router();

adminRoutes.post("/addAdmin", adminController.addNewAdminUser);
adminRoutes.post("/adminLogin", adminController.adminLogin);
adminRoutes.get("/pincode/:pincode", adminController.loadDataBasedOnPincodes);
adminRoutes.post("/loadPincodeInfo", adminController.savePincodeInfo);

export default adminRoutes;
