import { Router } from "express";
import userController from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.get("/checkUserExists/:id", userController.checkIfUserExists);
userRoutes.post("/saveUser", userController.saveUser);

export default userRoutes;
