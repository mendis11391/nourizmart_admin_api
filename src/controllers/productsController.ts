import { Request, Response } from "express";
import ProductService from "../services/productService";
import { AuthenticatedRequest } from "../interface/authenticationRequestInterface";

const productService = new ProductService();

export const addNewProduct = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    // {"productCategoryId":"1","unitId":"1","productName":"Tomato","isActive":"Y"}
    const reqParam = {
      productCategoryId: req.body.productCategoryId,
      productName: req.body.productName,
      isActive: req.body.isActive,
    };
    const productImage = req.body.productImage;
    const result = await productService.addProduct(
      JSON.stringify(reqParam),
      productImage
    );
    if (result && result[0]) {
      res.json(result[0][0]);
    } else {
      res.json({ status: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchAllProducts = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const products = await productService.listAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchProductPincodePriceMapping = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const products = await productService.fetchProductPincodePriceMapping(
      req.params.productPriceLinkId
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchAllProductPincodeMappings = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const productPincodeMappings =
      await productService.fetchAllProductPincodeMappings();
    res.json(productPincodeMappings);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addProductPincodeMapping = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const reqBody = req.body;
    const result = await productService.addProductPincodeMapping(
      JSON.stringify(reqBody)
    );
    if (result && result[0]) {
      res.json(result[0][0]);
    } else {
      res.json({ status: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProductPincodeMappingPrice = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const reqBody = req.body;
    const result = await productService.updateProductPincodeMappingPrice(
      JSON.stringify(reqBody)
    );
    if (result && result[0]) {
      res.json(result[0][0]);
    } else {
      res.json({ status: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProductPincodeMapping = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const payload = [
      {
        ProductPriceLinkId: req.params.productPriceLinkId,
        action: "delete",
      },
    ];
    const result = await productService.addProductPincodeMapping(
      JSON.stringify(payload)
    );
    if (result && result[0]) {
      res.json(result[0][0]);
    } else {
      res.json({ status: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
