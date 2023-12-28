import { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import ProductService from "../services/productService";
import { AddAdmin } from "../models/adminModel";
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
      unitId: req.body.unitId,
      productName: req.body.productName,
      isActive: req.body.isActive,
    };
    const result = await productService.addProduct(JSON.stringify(reqParam));
    if (result && result[0]) {
      res.json(result[0][0]);
    } else {
      res.json({ status: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
