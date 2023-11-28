import axios from "axios";
import pool from "../database/connection";

class Admin {
  getAll(callback: (error: any, results: any) => void) {
    const query = "SELECT * FROM VW_NRM_USER_DETAILS_BASE";
    pool.query(query, callback);
  }

  addNewAdminUser(userData: any, callback: (error: any, results: any) => void) {
    // Call the stored procedure
    pool.query("CALL nrm_admin_workflow(?)", [userData], callback);
  }

  adminUserLogin(userData: any, callback: (error: any, results: any) => void) {
    // Call the stored procedure
    pool.query(
      "SELECT NRM_ADMIN_AUTH(?,?) as result;",
      [userData.username, userData.password],
      callback
    );
  }

  fetchDataBasedOnPincodes(
    pincode: string,
    callback: (error: any, results: any) => void
  ) {
    const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        callback(null, data);
      })
      .catch((error) => {
        console.error("Error fetching data from external API:", error);
        callback(error, null);
      });
  }

  addInfoForPinCode(
    pincodeInfo: any,
    callback: (error: any, results: any) => void
  ) {
    pool.query("call nrm_location_wflow(?);", [pincodeInfo], callback);
  }

  getStatesList(callback: (error: any, results: any) => void) {
    pool.query("select * from VW_NRM_STATE;", callback);
  }

  getCitiesList(
    stateCode: number,
    callback: (error: any, results: any) => void
  ) {
    pool.query(
      "select * from VW_NRM_DISTRICT where stateId = ?;",
      [stateCode],
      callback
    );
  }

  getPincodesList(
    cityCode: number,
    callback: (error: any, results: any) => void
  ) {
    pool.query(
      "select * from VW_NRM_PINCODE where districtId = ?;",
      [cityCode],
      callback
    );
  }

  getAreasList(pincode: number, callback: (error: any, results: any) => void) {
    pool.query(
      "select * from VW_NRM_AREA where pincodeId = ?;",
      [pincode],
      callback
    );
  }
}

export default new Admin();
