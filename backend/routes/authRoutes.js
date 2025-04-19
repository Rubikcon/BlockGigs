import express from "express";
import {
  // registerUser,
  loginUser,
  requestOTP,
  verifyOTP,
  registerWithEmail,
  registerWithWallet,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register-email", registerWithEmail);
router.post("/register-wallet", registerWithWallet);
router.post("/request-otp", requestOTP);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);

export default router;
