import express from "express";
import {
  createJob,
  getJob,
  getAllJobs,
  completeJob,
} from "../controllers/jobController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authenticate, createJob); // Only clients can create jobs
router.get("/available", getAllJobs); // public: Get all avialble jobs
router.get("/:jobId", getJob); // Anyone can retrieve job details
router.put("/:jobId/complete", authenticate, completeJob);
// Talent completes a job
export default router;
