import { Router } from "express";
import {
  addOrUpdateNewAdminUser,
  adminLogin,
  fetchArea,
  fetchCities,
  fetchPincodes,
  fetchStates,
  loadDataBasedOnPincodes,
  savePincodeInfo,
  fetchAllAdminUsers,
} from "../controllers/adminController";
import isAuth from "../middleware/isAuth";
const adminRoutes = Router();

// POST API's
adminRoutes.post("/adminLogin", adminLogin);
adminRoutes.post("/addAdmin", isAuth, addOrUpdateNewAdminUser);
// Get API's
adminRoutes.get("/allAdminUsers", fetchAllAdminUsers);
adminRoutes.get("/pincode/:pincode", loadDataBasedOnPincodes);
adminRoutes.get("/states", isAuth, fetchStates);
adminRoutes.get("/cities/:stateCode", fetchCities);
adminRoutes.get("/pincodes/:cityCode", fetchPincodes);
adminRoutes.get("/area/:pincode", fetchArea);

adminRoutes.post("/loadPincodeInfo", savePincodeInfo);

export default adminRoutes;
