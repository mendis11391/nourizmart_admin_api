import { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import AdminService from "../services/adminService";
import { AddAdmin } from "../models/adminModel";

interface AuthenticatedRequest extends Request {
  user?: any;
  params: any;
}

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const jwt = require("jsonwebtoken");

const adminService = new AdminService();

export const fetchAllAdminUsers = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const users = await adminService.getAllAdminUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchAdminUserInfo = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const users = await adminService.getAdminUserInfo(req.params.adminId);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addOrUpdateNewAdminUser = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const admin = req.user;
    const reqParam: AddAdmin = {
      username: req.body.userName,
      mobile: req.body.mobile,
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      groupid: req.body.groupid,
      createdby: admin.userName,
      password: req.body.password,
      operation: req.body.operation,
    };
    const result = await adminService.addOrUpdateNewAdminUser(
      JSON.stringify(reqParam)
    );
    res.json(result[0][0]);
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
    if (result && result[0]) {
      const adminUser = result[0];
      const accessToken = jwt.sign(
        {
          adminId: adminUser.adminId,
          userName: adminUser.userName,
          firstName: adminUser.firstName,
          lastName: adminUser.lastName,
          groupId: adminUser.groupId,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({
        accessToken: accessToken,
        userInfo: [
          {
            userName: adminUser.userName,
            firstName: adminUser.firstName,
            lastName: adminUser.lastName,
          },
        ],
      });
    } else {
      res.json({ accessToken: null });
    }
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
  req: AuthenticatedRequest,
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

export const savePincodeInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const pincodeInfo = req.body;
    const result = await adminService.addInfoForPinCode(
      JSON.stringify(pincodeInfo)
    );
    res.json({ result: result[0][0].status });
  } catch (error) {
    console.error("Error in adding:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
