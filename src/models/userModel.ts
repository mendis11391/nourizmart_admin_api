import pool from "../database/connection";

class Users {
  getAll(callback: (error: any, results: any) => void) {
    const query = "SELECT * FROM VW_NRM_USER_DETAILS_BASE";
    pool.query(query, callback);
  }

  getUserById(userId: string, callback: (error: any, results: any) => void) {
    const query = "SELECT * FROM users WHERE firebaseId = ?";
    pool.query(query, [userId], callback);
  }

  checkUserExists(
    userId: string,
    callback: (error: any, results: any) => void
  ) {
    const query =
      "SELECT count(*) AS UserCount FROM users WHERE firebaseId = ?";
    pool.query(query, [userId], callback);
  }

  saveUser(
    firebaseId: string,
    first_name: string,
    last_name: string,
    mobile: string,
    email: string,
    state: string,
    district: string,
    taluk: string,
    area: string,
    pincode: number,
    landmark: string,
    address: string,
    callback: (error: any, results: any) => void
  ) {
    const query =
      "INSERT INTO users (firebaseId, first_name, last_name, mobile, email, state, district, taluk, area, pincode, landmark, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      firebaseId,
      first_name,
      last_name,
      mobile,
      email,
      state,
      district,
      taluk,
      area,
      pincode,
      landmark,
      address,
    ];

    pool.query(query, values, callback);
  }

  addNewAdminUser(
    userData: string,
    callback: (error: any, results: any) => void
  ) {
    // Call the stored procedure
    pool.query("CALL nrm_admin_workflow(?)", [userData], callback);
  }
}

export default new Users();
