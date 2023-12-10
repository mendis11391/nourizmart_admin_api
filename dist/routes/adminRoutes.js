"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const adminRoutes = (0, express_1.Router)();
// POST API's
adminRoutes.post("/adminLogin", adminController_1.adminLogin);
adminRoutes.post("/addAdmin", adminController_1.addOrUpdateNewAdminUser);
// Get API's
adminRoutes.get("/pincode/:pincode", adminController_1.loadDataBasedOnPincodes);
adminRoutes.get("/states", adminController_1.fetchStates);
adminRoutes.get("/cities/:stateCode", adminController_1.fetchCities);
adminRoutes.get("/pincodes/:cityCode", adminController_1.fetchPincodes);
adminRoutes.get("/area/:pincode", adminController_1.fetchArea);
adminRoutes.post("/loadPincodeInfo", adminController_1.savePincodeInfo);
exports.default = adminRoutes;
//# sourceMappingURL=adminRoutes.js.map