import { Router } from "express";
import {
  addNewProduct,
  fetchAllProducts,
  fetchAllProductPincodeMappings,
  addProductPincodeMapping,
  deleteProductPincodeMapping,
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
productRoutes.delete(
  "/deleteProductPincodeMapping/:productPriceLinkId",
  deleteProductPincodeMapping
);

export default productRoutes;
