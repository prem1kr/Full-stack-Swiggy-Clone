import express from "express";
import { googleAuth, resetPassword, sendOtp, SignIn, SignOut, Signup, verifyOtp } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup", Signup);
authRouter.post("/signin", SignIn);
authRouter.delete("/signout", SignOut);
authRouter.post("/send-otp", sendOtp);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/google-auth", googleAuth);

export default authRouter;