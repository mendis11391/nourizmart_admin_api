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

export const fetchCustomerData = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userInfo = await customerService.getCustomerInfo(
      req.params.firebaseId
    );
    res.json(userInfo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createNewCustomer = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userInfo = await customerService.createNewCustomer(req.body);
    if (userInfo.serverStatus === 2) {
      res.json({ status: 1, message: "Customer added successfully" });
    } else {
      res.json({ status: 0, message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
};

/*
firebaseId: string,
first_name: string,
last_name: string,
mobile: string,
email: string,
house_no: string,
street: string,
area: string,
district: string,
state: string,
pincodeId: number,
landmark: string,
is_active: string = "Y",
createdBy: String = "User"
*/
