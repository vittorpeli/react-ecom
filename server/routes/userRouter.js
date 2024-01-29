import express  from "express";
import AuthController from "../controllers/AuthController.js";
// import authenticateToken from "../middlewares/auth.js";
const userRouter = express.Router();

userRouter.get("/", AuthController.getAll);
userRouter.post("/signup", AuthController.register);
userRouter.post("/login", AuthController.login);

export default userRouter;