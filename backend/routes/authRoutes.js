import express from "express";
import {
  registerUser,
  loginUser,
  requestOTP,
  verifyOTP,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/request-otp", requestOTP);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);

export default router;
