import { Router } from "express";
import {
  addNewProduct,
  fetchAllProducts,
} from "../controllers/productsController";
import isAuth from "../middleware/isAuth";
const productRoutes = Router();

// POST API's
productRoutes.post("/addProduct", addNewProduct);
productRoutes.get("/listProduct", fetchAllProducts);

export default productRoutes;
