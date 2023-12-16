import axios from "axios";
import { query } from "../database/connection";

export class AdminService {
  fetchDataBasedOnPincodes(pincode: any): Promise<any> {
    const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;
    const response = axios.get(apiUrl);
    return response;
  }

  getAllAdminUsers(): Promise<any> {
    const sql = "select * from VW_NRM_ADMIN_AUTH;";
    return query(sql);
  }

  getAdminUserInfo(adminId: number): Promise<any> {
    const sql = "select * from VW_NRM_ADMIN_AUTH where adminId = ?;";
    return query(sql, [adminId]);
  }

  addOrUpdateNewAdminUser(userData: any): Promise<any> {
    const sql = "CALL NRM_ADMIN_WORKFLOW(?);";
    return query(sql, [userData]);
  }

  adminUserLogin(userData: any): Promise<any> {
    const sql =
      "SELECT * FROM VW_NRM_ADMIN_AUTH where upper(userName)= upper(?) and password = NRM_PASS_HASH(?);";
    return query(sql, [userData.username, userData.password]);
  }

  addInfoForPinCode(pincodeInfo: any): Promise<any> {
    const sql = "call NRM_LOCATION_WFLOW(?);";
    return query(sql, [pincodeInfo]);
  }

  getStatesList(): Promise<any> {
    const sql = "select * from VW_NRM_STATE;";
    return query(sql);
  }

  getCitiesList(stateCode: number): Promise<any> {
    const sql = "select * from VW_NRM_DISTRICT where stateId = ?;";
    return query(sql, [stateCode]);
  }

  getPincodesList(cityCode: number): Promise<any> {
    const sql = "select * from VW_NRM_PINCODE where districtId = ?;";
    return query(sql, [cityCode]);
  }

  getAreasList(pincode: number): Promise<any> {
    const sql = "select * from VW_NRM_AREA where pincodeId = ?;";
    return query(sql, [pincode]);
  }

  // static async addInfoForPinCode(pincodeInfo: any): Promise<any> {
  //   const connection = await connectToDatabase();
  //   const result = await query(connection, "call nrm_location_wflow(?);", [
  //     pincodeInfo,
  //   ]);
  //   if (result === 0) {
  //     return null;
  //   }
  //   connection.end();
  //   return result;
  // }
}

export default AdminService;
