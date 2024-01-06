import { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import CustomerService from "../services/customerService";
import { AuthenticatedRequest } from "../interface/authenticationRequestInterface";

const customerService = new CustomerService();

export const checkIfCustomerExists = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const customerCheck = await customerService.checkIfCustomerExists(
      req.params.firebaseId
    );
    if (customerCheck[0].customerExist === 0) {
      res.json({ exists: false });
    } else {
      res.json({ exists: true });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
