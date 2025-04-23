// routes/userRoutes.js
import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  requestDeleteAccount,
  cancelDeleteAccount,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

// Now using params instead of protected routes
router.get("/:role/:id", getUserProfile);
router.put("/:role/:id", updateUserProfile);
router.post("/delete/:role/:id", requestDeleteAccount);
router.post("/cancel-delete/:role/:id", cancelDeleteAccount);
router.get("/", getAllUsers);

export default router;
