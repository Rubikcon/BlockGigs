// routes/jobRoutes.js
import express from "express";
import {
  createJob,
  assignFreelancer,
  getJob,
  getAllJobs,
  completeJob,
  applyForJob,
  getJobsByClient,
} from "../controllers/jobController.js";

import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new job
router.post("/jobs", authenticate, createJob);

// Get all jobs
router.get("/jobs", getAllJobs);

// get all jobs created by a client
router.get("/jobs/:clientId", getJobsByClient);

// Get a specific job
router.get("/jobs/:jobId", getJob);

// Assign a freelancer to a job
router.put("/jobs/:jobId/assign", assignFreelancer);

// Apply for a job
router.post("/jobs/:jobId/apply", applyForJob);

// Complete a job
router.put("/jobs/:jobId/complete", completeJob);

export default router;
