import { Router } from "express";
import {
  checkIfCustomerExists,
  fetchCustomerData,
  createNewCustomer,
  getDeliveryOption,
} from "../controllers/customerController";
import isAuth from "../middleware/isAuth";
const customerRoutes = Router();

customerRoutes.get("/customerExists/:firebaseId", checkIfCustomerExists);
customerRoutes.get("/customerInfo/:firebaseId", fetchCustomerData);
customerRoutes.get("/deliveryoption/:firebaseId", getDeliveryOption);

customerRoutes.post("/newCustomer", createNewCustomer);

export default customerRoutes;
