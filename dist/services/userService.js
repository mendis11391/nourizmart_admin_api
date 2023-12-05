"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const connection_1 = require("../database/connection");
class UserService {
    createNewCustomer(firebaseId, first_name, last_name, mobile, email, state, district, taluk, area, pincode, landmark, address) {
        const sql = "INSERT INTO users (firebaseId, first_name, last_name, mobile, email, state, district, taluk, area, pincode, landmark, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
        return (0, connection_1.query)(sql, [
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
        ]);
    }
}
exports.UserService = UserService;
// import { connectToDatabase, query } from "../database/connection";
// export class UsersService {
//   // getAll(callback: (error: any, results: any) => void) {
//   //   const query = "SELECT * FROM VW_NRM_CUSTOMER_DETAILS_BASE";
//   //   pool.query(query, callback);
//   // }
//   static async getAll(): Promise<any> {
//     const connection = await connectToDatabase();
//     const result = await query(
//       connection,
//       "SELECT * FROM VW_NRM_CUSTOMER_DETAILS_BASE"
//     );
//     if (result === 0) {
//       return null;
//     }
//     connection.end();
//     return result;
//   }
//   static async getUserById(firebaseId: string): Promise<any> {
//     const connection = await connectToDatabase();
//     const result = await query(
//       connection,
//       "SELECT * FROM NRM_CUSTOMER_DETAILS WHERE FIRE_BASE_ID = ?",
//       [firebaseId]
//     );
//     if (result === 0) {
//       return null;
//     }
//     connection.end();
//     return result;
//   }
// getUserById(userId: string, callback: (error: any, results: any) => void) {
//   const query = "SELECT * FROM users WHERE firebaseId = ?";
//   pool.query(query, [userId], callback);
// }
// checkUserExists(
//   userId: string,
//   callback: (error: any, results: any) => void
// ) {
//   const query =
//     "SELECT count(*) AS UserCount FROM users WHERE firebaseId = ?";
//   pool.query(query, [userId], callback);
// }
/*
  static async createNewCustomer(
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
    address: string
  ): Promise<any> {
    const connection = await connectToDatabase();
    const result = await query(
      connection,
      "INSERT INTO users (firebaseId, first_name, last_name, mobile, email, state, district, taluk, area, pincode, landmark, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
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
      ]
    );
    if (result === 0) {
      return null;
    }
    connection.end();
    return result;
  }

  {
    firebaseId: 'pOahKI278lhh9ey3H3czaiZZSYq1',
        first_name: 'Prashanth',
        last_name 'Panju',
        mobile: '9742625050',
        email: 'prashanth@gmail.com',
        state: 1,
        district: 4,
        pincode: 4,
        area: 7,
          landmark: 'Near JP Nagar welfare club',
        address,
  }

  // saveUser(
  //   firebaseId: string,
  //   first_name: string,
  //   last_name: string,
  //   mobile: string,
  //   email: string,
  //   state: string,
  //   district: string,
  //   taluk: string,
  //   area: string,
  //   pincode: number,
  //   landmark: string,
  //   address: string,
  //   callback: (error: any, results: any) => void
  // ) {
  //   const query =
  //     "INSERT INTO users (firebaseId, first_name, last_name, mobile, email, state, district, taluk, area, pincode, landmark, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  //   const values = [
  //     firebaseId,
  //     first_name,
  //     last_name,
  //     mobile,
  //     email,
  //     state,
  //     district,
  //     taluk,
  //     area,
  //     pincode,
  //     landmark,
  //     address,
  //   ];

  //   pool.query(query, values, callback);
  // }
  */
// }
// export default UsersService;
//# sourceMappingURL=userService.js.map