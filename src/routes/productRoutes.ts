import { Router } from "express";
import {
  addNewProduct,
  fetchAllProducts,
  fetchAllProductPincodeMappings,
} from "../controllers/productsController";
import isAuth from "../middleware/isAuth";
const productRoutes = Router();

// POST API's
productRoutes.post("/addProduct", addNewProduct);
productRoutes.get("/listProduct", fetchAllProducts);
productRoutes.get(
  "/fetchProductPincodeMappingInfo",
  fetchAllProductPincodeMappings
);

export default productRoutes;
