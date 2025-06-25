import express from "express";
import {
  // createTalent,
  getTalents,
  getTalentById,
  updateTalent,
  deleteTalent,
} from "../controllers/talentController.js";

const router = express.Router();

// router.post("/", createTalent); // Create a new talent
router.get("/", getTalents); // Get all talents
router.get("/:id", getTalentById); // Get a single talent by ID
router.put("/:id", updateTalent); // Update a talent
router.delete("/:id", deleteTalent); // Delete a talent

export default router;
