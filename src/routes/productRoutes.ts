import { Router } from "express";
import {
  addNewProduct,
  fetchAllProducts,
  fetchAllProductPincodeMappings,
  addProductPincodeMapping,
  deleteProductPincodeMapping,
  fetchProductPincodePriceMapping,
  updateProductPincodeMappingPrice,
} from "../controllers/productsController";
import isAuth from "../middleware/isAuth";
const productRoutes = Router();

// POST API's
productRoutes.post("/addProduct", addNewProduct);
productRoutes.post("/productPincodeMap", addProductPincodeMapping);
productRoutes.post(
  "/updateProductPincodeMapPrice",
  updateProductPincodeMappingPrice
);
productRoutes.get("/listProduct", fetchAllProducts);
productRoutes.get(
  "/fetchProductPincodePriceMapping/:productPriceLinkId",
  fetchProductPincodePriceMapping
),
  productRoutes.get(
    "/fetchProductPincodeMappingInfo",
    fetchAllProductPincodeMappings
  );
productRoutes.delete(
  "/deleteProductPincodeMapping/:productPriceLinkId",
  deleteProductPincodeMapping
);

export default productRoutes;
