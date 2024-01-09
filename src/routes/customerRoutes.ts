import { Router } from "express";
import {
  checkIfCustomerExists,
  fetchCustomerData,
} from "../controllers/customerController";
import isAuth from "../middleware/isAuth";
const customerRoutes = Router();

customerRoutes.get("/customerExists/:firebaseId", checkIfCustomerExists);
customerRoutes.get("/customerInfo/:firebaseId", fetchCustomerData);

export default customerRoutes;
