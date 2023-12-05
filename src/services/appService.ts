import { query } from "../database/connection";

export class AppService {}

export default AppService;
//   static async getUsers(): Promise<any> {
//     const connection = await connectToDatabase();
//     const result = await query(connection, "select * from users;");
//     if (result === 0) {
//       return null;
//     }
//     connection.end();
//     return result;
//   }

//   static async adminUserLogin(userData: any): Promise<any> {
//     try {
//       const connection = await connectToDatabase();
//       const result = await query(
//         connection,
//         "SELECT NRM_ADMIN_AUTH(?,?) as result;",
//         [userData.username, userData.password]
//       );
//       if (result === 0) {
//         return null;
//       }
//       connection.end();
//       return result;
//     } catch (error) {
//       console.error("Error in adminUserLogin:", error);
//       throw error;
//     }
//   }
// }

// export default AppService;
