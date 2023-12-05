// import { connectToDatabase, query } from "../database/connection";

// export class CustomerService {
//   getAll(callback: (error: any, results: any) => void) {
//     const query = "SELECT * FROM customers";
//     pool.query(query, callback);
//   }

//   static async getAll(): Promise<any> {
//     const connection = await connectToDatabase();
//     const result = await query(
//       connection,
//       "SELECT NRM_ADMIN_AUTH(?,?) as result;",
//       [userData.username, userData.password]
//     );
//     if (result === 0) {
//       return null;
//     }
//     connection.end();
//     return result;
//   }
// }

// export default CustomerService;
