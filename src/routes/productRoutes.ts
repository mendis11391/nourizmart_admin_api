import { Router } from "express";
import {
  addNewProduct,
  fetchAllProducts,
  fetchAllProductPincodeMappings,
  addProductPincodeMapping,
} from "../controllers/productsController";
import isAuth from "../middleware/isAuth";
const productRoutes = Router();

// POST API's
productRoutes.post("/addProduct", addNewProduct);
productRoutes.post("/productPincodeMap", addProductPincodeMapping);
productRoutes.get("/listProduct", fetchAllProducts);
productRoutes.get(
  "/fetchProductPincodeMappingInfo",
  fetchAllProductPincodeMappings
);

export default productRoutes;
