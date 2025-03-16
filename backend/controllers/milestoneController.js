// controllers/milestoneController.js (Milestone Business Logic)
// const { Job, Milestone } = require("../models");
import { Job, Milestone } from "../models/Job";

exports.submitMilestone = async (req, res) => {
  try {
    const milestone = new Milestone({ ...req.body, job: req.params.jobId });
    await milestone.save();
    await Job.findByIdAndUpdate(req.params.jobId, {
      $push: { milestones: milestone._id },
    });
    res.status(201).json(milestone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveMilestone = async (req, res) => {
  try {
    const milestone = await Milestone.findById(req.params.milestoneId);
    if (!milestone)
      return res.status(404).json({ message: "Milestone not found" });
    milestone.status = "approved";
    await milestone.save();
    res.json(milestone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
