import { Router } from "express";
import { checkIfCustomerExists } from "../controllers/customerController";
import isAuth from "../middleware/isAuth";
const customerRoutes = Router();

customerRoutes.get("/customerExists/:firebaseId", checkIfCustomerExists);

export default customerRoutes;
