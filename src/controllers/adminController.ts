import { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import AdminService from "../services/adminService";
import { AddAdmin } from "../models/adminModel";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const jwt = require("jsonwebtoken");

const adminService = new AdminService();

export const addOrUpdateNewAdminUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqParam: AddAdmin = {
      username: req.body.username,
      mobile: req.body.mobile,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      groupid: req.body.groupid,
      createdby: req.body.createdby,
      password: req.body.password,
      operation: req.body.operation,
    };
    const result = await adminService.addOrUpdateNewAdminUser(
      JSON.stringify(reqParam)
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const adminLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqParam = {
      username: req.body.username,
      password: req.body.password,
    };
    const result = await adminService.adminUserLogin(reqParam);
    // if (result && result[0]) {
    //   const accessToken = jwt.sign(
    //     { request: reqParam },
    //     process.env.ACCESS_TOKEN_SECRET
    //   );
    //   res.json({ accessToken: accessToken });
    // } else {
    //   res.json({ accessToken: null });
    // }
    res.json(result[0]);
  } catch (error) {
    console.error("Error in adminLogin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loadDataBasedOnPincodes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const pincode = req.params.pincode;

    const externalData = await adminService.fetchDataBasedOnPincodes(pincode);
    const updatedArr = externalData.data[0].PostOffice.map((val: any) => ({
      area: val.Name,
      pincode: val.Pincode,
      taluk: val.Block,
      state: val.State,
      district: val.District,
    }));
    res.json(updatedArr);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchStates = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const states = await adminService.getStatesList();
    res.json(states);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchCities = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const stateCode = req.params.stateCode;
    const cities = await adminService.getCitiesList(+stateCode);
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchPincodes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cityCode = req.params.cityCode;
    const pincodes = await adminService.getPincodesList(+cityCode);
    res.json(pincodes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchArea = async (req: Request, res: Response): Promise<void> => {
  try {
    const pincode = req.params.pincode;
    const pincodes = await adminService.getAreasList(+pincode);
    res.json(pincodes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
