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
  getUserAppliedJobs,

  // new functions
  approveJobApplication,
  rejectJobApplication,
  submitJobCompletion,
  acceptCompletionAndCloseJob,
  getJobsAwaitingApproval,
  getClientJobStats,
  getApplicantsForAJob,
} from "../controllers/jobController.js";

import {
  authenticate,
  requireClient,
  requireTalent,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new job
router.post("/jobs", authenticate, createJob);

// Get all jobs
router.get("/jobs", authenticate, getAllJobs);

// get all jobs created by a client
router.get("/jobs/:clientId", getJobsByClient);

// Get a specific job
router.get("/jobs/:jobId", getJob);

// Assign a freelancer to a job
router.put("/jobs/:jobId/assign", assignFreelancer);

// Apply for a job
// router.post("/jobs/:jobId/apply", applyForJob);
router.put("/jobs/apply/:jobId", applyForJob);

// Complete a job
router.put("/jobs/:jobId/complete", completeJob);

// routes/jobRoutes.js or userRoutes.js
router.get("/jobs/:userId/applied-jobs", getUserAppliedJobs);

// ========== NEW ROUTES ==========

// Job Application Management Routes (Client actions)
router.put("/:jobId/approve", authenticate, approveJobApplication);
// PUT /api/jobs/:jobId/approve
// Body: { talentId:a "talent_id_here" }
// Description: Client approves a talent's job application

router.put("/:jobId/reject", authenticate, rejectJobApplication);
// PUT /api/jobs/:jobId/reject
// Body: { talentId: "talent_id_here" }
// Description: Client rejects a talent's job application

// Job Completion Management Routes
router.put("/:jobId/submit-completion", authenticate, submitJobCompletion);
// PUT /api/jobs/:jobId/submit-completion
// Body: { completionNotes: "optional notes", deliverables: ["url1", "url2"] }
// Description: Talent submits completed work for client review

router.put(
  "/:jobId/accept-completion",
  authenticate,
  acceptCompletionAndCloseJob
);
// PUT /api/jobs/:jobId/accept-completion
// Body: { rating: 5, feedback: "Great work!" }
// Description: Client accepts completed work and closes the job

// Job Applicants Management Routes
router.get("/:jobId/applicants", getApplicantsForAJob);

// Client Management Routes
router.get("/client/awaiting-approval", authenticate, getJobsAwaitingApproval);
// GET /api/jobs/client/awaiting-approval
// Description: Get jobs that are completed and awaiting client approval

router.get("/client/stats", authenticate, requireTalent, getClientJobStats);
// GET /api/jobs/client/stats
// Description: Get client's job statistics (total posted, completed, spent, etc.)

export default router;
