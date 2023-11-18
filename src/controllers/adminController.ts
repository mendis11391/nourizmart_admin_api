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
}

export default new AdminController();
