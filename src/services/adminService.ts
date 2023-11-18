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
}

export default new Admin();
