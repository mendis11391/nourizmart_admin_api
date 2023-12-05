// import { Request, Response } from "express";
// import UsersService from "../services/userService";
// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

// // /**
// //  * The `UserController` class is responsible for handling requests related to users.
// //  */
// export class UserController {
//   //   getAllUsers(req: Request, res: Response) {
//   //     Users.getAll((err, results) => {
//   //       if (err) {
//   //         console.error("Error fetching user:", err);
//   //         res.status(500).json({ error: "Database error" });
//   //       } else {
//   //         res.json(results);
//   //       }
//   //     });
//   //   }

//   static async getAllUsers(req: Request, res: Response) {
//     const result = await UsersService.getAll();
//     res.json(result);
//   }

//   static async getUserById(req: Request, res: Response) {
//     const firebaseId = req.params.id;
//     const result = await UsersService.getUserById(firebaseId);
//     res.json(result);
//   }

//   static async checkIfUserExists(req: Request, res: Response) {
//     const firebaseId = req.params.id;
//     const result = await UsersService.getUserById(firebaseId);
//     res.json(result);
//   }

//   //   getUserById(req: Request, res: Response) {
//   //     const userId = req.params.id;
//   //     Users.getUserById(userId, (error, results) => {
//   //       if (error) {
//   //         console.error("Error fetching user:", error);
//   //         res.status(500).json({ error: "Database error" });
//   //       } else {
//   //         res.json(results[0]);
//   //       }
//   //     });
//   //   }

//   //   checkIfUserExists(req: Request, res: Response) {
//   //     const userId = req.params.id;
//   //     Users.checkUserExists(userId, (error, results) => {
//   //       if (error) {
//   //         console.error("Error fetching user:", error);
//   //         res.status(500).json({ error: "Database error" });
//   //       } else {
//   //         if (results[0].UserCount > 0) {
//   //           res.json({ exists: true });
//   //         } else {
//   //           res.json({ exists: false });
//   //         }
//   //       }
//   //     });
//   //   }

//   /*
//   static async createNewCustomer(req: Request, res: Response) {
//     const {
//       firebaseId,
//       first_name,
//       last_name,
//       mobile,
//       email,
//       state,
//       district,
//       taluk,
//       area,
//       pincode,
//       landmark,
//       address,
//     } = req.body;
//     const result = await UsersService.createNewCustomer(
//       firebaseId,
//       first_name,
//       last_name,
//       mobile,
//       email,
//       state,
//       district,
//       taluk,
//       area,
//       pincode,
//       landmark,
//       address,
//     );
//     res.json({
//                   message: "User saved successfully",
//                   userId: result.insertId,
//                 });
//   }

//   //   saveUser(req: Request, res: Response) {
//   //     const {
//   //       firebaseId,
//   //       first_name,
//   //       last_name,
//   //       mobile,
//   //       email,
//   //       state,
//   //       district,
//   //       taluk,
//   //       area,
//   //       pincode,
//   //       landmark,
//   //       address,
//   //     } = req.body;

//   //     Users.saveUser(
//   //       firebaseId,
//   //       first_name,
//   //       last_name,
//   //       mobile,
//   //       email,
//   //       state,
//   //       district,
//   //       taluk,
//   //       area,
//   //       pincode,
//   //       landmark,
//   //       address,
//   //       (error, results) => {
//   //         if (error) {
//   //           console.error("Error saving user:", error);
//   //           res.status(500).json({ error: "Database error" });
//   //         } else {
//   //           res.json({
//   //             message: "User saved successfully",
//   //             userId: results.insertId,
//   //           });
//   //         }
//   //       }
//   //     );
//   //   }

//   */
// }

// export default UserController;
