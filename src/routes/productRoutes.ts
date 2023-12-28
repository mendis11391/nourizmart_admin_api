import { Router } from "express";
import { addNewProduct } from "../controllers/productsController";
import isAuth from "../middleware/isAuth";
const productRoutes = Router();

// POST API's
productRoutes.post("/addProduct", addNewProduct);

export default productRoutes;
