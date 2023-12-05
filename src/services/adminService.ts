import axios from "axios";
import { query } from "../database/connection";

export class AdminService {
  fetchDataBasedOnPincodes(pincode: any): Promise<any> {
    const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;
    const response = axios.get(apiUrl);
    return response;
  }

  addOrUpdateNewAdminUser(userData: any): Promise<any> {
    const sql = "CALL nrm_admin_workflow(?);";
    return query(sql, [userData]);
  }

  adminUserLogin(userData: any): Promise<any> {
    // const sql = "SELECT NRM_ADMIN_AUTH(?,?) as result;";
    const sql =
      "select admin_id, user_name, mobile from NRM_ADMIN_DETAILS where user_name=?;";
    return query(sql, [userData.username]);
  }

  // addInfoForPinCode(pincodeInfo: any): Promise<any> {
  //   const sql = "call nrm_location_wflow(?);";
  //   return query(sql, [pincodeInfo]);
  // }

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
