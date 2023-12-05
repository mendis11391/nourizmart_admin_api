"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
class AppService {
}
exports.AppService = AppService;
exports.default = AppService;
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
//# sourceMappingURL=appService.js.map