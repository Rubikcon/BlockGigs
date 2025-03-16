// routes/milestones.js (Milestone Routes)
const express = require("express");
const {
  submitMilestone,
  approveMilestone,
} = require("../controllers/milestoneController");
const router = express.Router();

router.post("/:jobId/milestones", submitMilestone);
router.put("/milestones/:milestoneId/approve", approveMilestone);

module.exports = router;
