import { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import adminModel from "../services/adminService";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

class AdminController {
  addNewAdminUser(req: Request, res: Response) {
    const reqParam = {
      username: req.body.username,
      mobile: req.body.mobile,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      groupid: req.body.groupid,
      createdby: req.body.createdby,
      password: req.body.password,
      operation: req.body.operation,
    };
    adminModel.addNewAdminUser(JSON.stringify(reqParam), (error, results) => {
      if (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Database error" });
      } else {
        res.json(results[0]);
      }
    });
  }

  adminLogin(req: Request, res: Response) {
    const reqParam = {
      username: req.body.username,
      password: req.body.password,
    };
    adminModel.adminUserLogin(reqParam, (error, results) => {
      if (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Login error" });
      } else {
        res.json({ result: results[0].result ? true : false });
      }
    });
  }

  loadDataBasedOnPincodes(req: Request, res: Response) {
    const pincode = req.params.pincode;

    adminModel.fetchDataBasedOnPincodes(pincode, (error, results) => {
      if (error) {
        console.error("Error fetching data based on pincode:", error);
        res.status(500).json({ error: "API error" });
      } else {
        const updatedArr = results[0]["PostOffice"].map((val: any) => ({
          area: val.Name,
          pincode: val.Pincode,
          taluk: val.Block,
          state: val.State,
          district: val.District,
        }));
        res.json(updatedArr);
      }
    });
  }

  savePincodeInfo(req: Request, res: Response) {
    const pincodeInfo = req.body;
    adminModel.addInfoForPinCode(
      JSON.stringify(pincodeInfo),
      (error, results) => {
        if (error) {
          console.error("Error loading pincode info:", error);
          res.status(500).json({ error: "API error" });
        } else {
          res.json({ result: results[0][0].status });
        }
      }
    );
  }

  fetchStates(req: Request, res: Response) {
    adminModel.getStatesList((error, results) => {
      if (error) {
        console.error("Error fecthing:", error);
        res.status(500).json({ error: "API error" });
      } else {
        res.json(results);
      }
    });
  }

  fetchCities(req: Request, res: Response) {
    const stateCode = req.params.stateCode;
    adminModel.getCitiesList(+stateCode, (error, results) => {
      if (error) {
        console.error("Error fecthing:", error);
        res.status(500).json({ error: "API error" });
      } else {
        res.json(results);
      }
    });
  }

  fetchPincodes(req: Request, res: Response) {
    const cityCode = req.params.cityCode;
    adminModel.getPincodesList(+cityCode, (error, results) => {
      if (error) {
        console.error("Error fecthing:", error);
        res.status(500).json({ error: "API error" });
      } else {
        res.json(results);
      }
    });
  }

  fetchArea(req: Request, res: Response) {
    const pincode = req.params.pincode;
    adminModel.getAreasList(+pincode, (error, results) => {
      if (error) {
        console.error("Error fecthing:", error);
        res.status(500).json({ error: "API error" });
      } else {
        res.json(results);
      }
    });
  }
}

export default new AdminController();
