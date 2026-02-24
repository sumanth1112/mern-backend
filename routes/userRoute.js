
import {addUser, deleteUser, showUsers } from "../controllers/userController.js";
import {authenticate, authorize} from "../middleware/auth.js";
import express from "express";

const userRouter = express.Router();

userRouter.get("/", authenticate, authorize("admin"), showUsers);
userRouter.post("/signup", addUser);
userRouter.post("/login", login);
userRouter.delete("/:id", authenticate, authorize("admin"), deleteUser);

export default userRouter;
