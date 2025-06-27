// controllers/jobController.js
// import Job from "../models/Job.js";
// import Talent from "../models/Talent.js";

import Job from "../models/Job.js";
import Talent from "../models/Talent.js";
import Client from "../models/Client.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    const { title, detail, totalPrice, milestone, milestones } = req.body;

    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // Check if the authenticated user is a client
    if (req.user.role !== "client") {
      return res.status(403).json({
        message: "Only clients can create jobs",
      });
    }

    // Validate required fields
    if (!title || !detail || !totalPrice || milestone === undefined) {
      return res.status(400).json({
        message:
          "All fields (title, detail, totalPrice, milestone) are required",
      });
    }

    // Optional: Validate milestones array if provided
    if (milestones && Array.isArray(milestones)) {
      // Check if milestone count matches the milestones array length
      if (milestones.length !== milestone) {
        return res.status(400).json({
          message: `Milestone count (${milestone}) should match the number of milestones provided (${milestones.length})`,
        });
      }

      // Validate each milestone has required fields
      for (let i = 0; i < milestones.length; i++) {
        const ms = milestones[i];
        if (!ms.deadline || !ms.amount || !ms.description) {
          return res.status(400).json({
            message: `Milestone ${
              i + 1
            } is missing required fields (deadline, amount, description)`,
          });
        }
      }
    }

    // Create new job document with client ID
    const job = new Job({
      title,
      detail,
      totalPrice,
      milestone,
      milestones,
      client: req.user.id, // Attach the client's ID to the job
    });

    await job.save();

    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.error("Error Creating Job:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Assign a freelancer to a job
export const assignFreelancer = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    job.talent = req.body.freelancerId; // Pass freelancerId in body
    await job.save();

    res.status(200).json({ message: "Freelancer assigned successfully", job });
  } catch (error) {
    console.error("Error Assigning Freelancer:", error);
    res.status(500).json({ message: error.message });
  }
};

// controllers/jobController.js

// Get a specific job by ID
export const getJob = async (req, res) => {
  try {
    const { jobId } = req.params; // Extract jobId from the URL parameters

    // Find the job by ID and populate related client and talent information
    const job = await Job.findById(jobId)
      .populate("client", "fullname email") // Only get fullname and email of client
      .populate("talent", "fullname email") // Only get fullname and email of talent
      .populate("applicants", "fullname email"); // Also get applicants' basic info

    // If job is not found
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // If job is found, return it
    res.status(200).json(job);
  } catch (error) {
    console.error("Error fetching specific job:", error);
    res.status(500).json({ message: error.message });
  }
};

// controllers/JobController.js

// get all jobs by created by a specific client
export const getJobsByClient = async (req, res) => {
  const { clientId } = req.params;
  try {
    const jobs = await Job.find({ client: clientId });
    res.status(200).json(jobs);
  } catch (err) {
    console.error("error fetching jobs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// controllers/jobController.js

// Get all jobs with pagination, filtering, and sorting
// controllers/jobController.js

// export const getAllJobs = async (req, res) => {
//   try {
//     const {
//       page = 1,
//       limit = 10,
//       status,
//       client,
//       sortBy = "createdAt",
//       order = "desc",
//       search,
//       minPrice,
//       maxPrice,
//       available,
//     } = req.query;

//     const filter = {};

//     // Filter by status if provided
//     if (status) {
//       filter.status = status;
//     }

//     // Filter by client ID if provided
//     if (client) {
//       filter.client = client;
//     }

//     // Search by title or detail if provided
//     if (search) {
//       filter.$or = [
//         { title: { $regex: search, $options: "i" } },
//         { detail: { $regex: search, $options: "i" } },
//       ];
//     }

//     // Filter by price range
//     if (minPrice || maxPrice) {
//       filter.totalPrice = {};
//       if (minPrice) {
//         filter.totalPrice.$gte = parseFloat(minPrice);
//       }
//       if (maxPrice) {
//         filter.totalPrice.$lte = parseFloat(maxPrice);
//       }
//     }

//     // Return only available jobs (jobs without assigned talent)
//     if (available === "true") {
//       filter.talent = null;
//     }

//     // Sorting order
//     const sortOrder = order === "asc" ? 1 : -1;

//     const jobs = await Job.find(filter)
//       .populate("client", "fullname email")
//       .populate("talent", "fullname email")
//       .populate("applicants", "fullname email")
//       .sort({ [sortBy]: sortOrder })
//       .skip((page - 1) * limit)
//       .limit(parseInt(limit));

//     const totalJobs = await Job.countDocuments(filter);

//     res.status(200).json({
//       jobs,
//       pagination: {
//         total: totalJobs,
//         page: parseInt(page),
//         pages: Math.ceil(totalJobs / limit),
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching jobs:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// Get all jobs (excluding completed)
// export const getAllJobs = async (req, res) => {
//   try {
//     const jobs = await Job.find({ status: { $ne: "completed" } })
//       .populate("client", "fullname email")
//       .populate("talent", "fullname email");

//     res.status(200).json(jobs);
//   } catch (error) {
//     console.error("Error Getting Jobs:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// Mark a job as completed by the assigned talent
export const completeJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { user } = req; // User from authentication middleware

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Only assigned talent can complete the job
    if (!job.talent || job.talent.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Only assigned talent can complete this job" });
    }

    job.status = "completed"; // You might want to update your model to include `status`
    await job.save();

    res.status(200).json({ message: "Job completed successfully", job });
  } catch (error) {
    console.error("Error Completing Job:", error);
    res.status(500).json({ message: error.message });
  }
};

// Apply for a job
export const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { applicantId } = req.body;

    if (!applicantId) {
      return res.status(400).json({ message: "Applicant ID is required" });
    }

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // If already assigned
    if (job.talent) {
      return res
        .status(400)
        .json({ message: "This job has already been assigned" });
    }

    // Prevent duplicate applications
    if (job.applicants.includes(applicantId)) {
      return res
        .status(400)
        .json({ message: "You have already applied for this job" });
    }

    job.applicants.push(applicantId);
    await job.save();

    // ✅ Add job to user's jobsApplied

    const user = await Talent.findById(applicantId);
    if (!user.jobsApplied.includes(jobId)) {
      user.jobsApplied.push(jobId);
      await user.save();
    }

    res
      .status(200)
      .json({ message: "Application submitted successfully", job });
  } catch (error) {
    console.error("Error Applying for Job:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserAppliedJobs = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await Talent.findById(userId).populate("jobsApplied");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user.jobsApplied);
  } catch (error) {
    console.error("Error fetching applied jobs:", error);
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// Enhanced Job Controller with new functions
// ==========================================

// Approve a talent's job application
export const approveJobApplication = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { talentId } = req.body;
    const { user } = req; // Authenticated user from middleware

    // Validate required fields
    if (!talentId) {
      return res.status(400).json({ message: "Talent ID is required" });
    }

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the authenticated user is the client who created this job
    if (job.client.toString() !== user.id.toString()) {
      return res.status(403).json({
        message: "Only the job creator can approve applications",
      });
    }

    // Check if job is still open
    if (job.status !== "open") {
      return res.status(400).json({
        message: "Job is no longer open for applications",
      });
    }

    // Check if talent has applied for this job
    if (!job.applicants.includes(talentId)) {
      return res.status(400).json({
        message: "Talent has not applied for this job",
      });
    }

    // Approve the application
    job.talent = talentId;
    job.status = "in_progress";
    job.approvedAt = new Date();

    // Remove all other applicants since job is now assigned
    job.rejectedApplicants = job.applicants.filter(
      (applicant) => applicant.toString() !== talentId.toString()
    );
    job.applicants = [talentId]; // Keep only the approved applicant

    await job.save();

    // Update talent's record
    const talent = await Talent.findById(talentId);
    if (talent) {
      if (!talent.jobsInProgress) talent.jobsInProgress = [];
      if (!talent.jobsInProgress.includes(jobId)) {
        talent.jobsInProgress.push(jobId);
      }
      await talent.save();
    }

    res.status(200).json({
      message: "Job application approved successfully",
      job: await Job.findById(jobId)
        .populate("client", "fullname email")
        .populate("talent", "fullname email"),
    });
  } catch (error) {
    console.error("Error approving job application:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Reject a talent's job application
export const rejectJobApplication = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { talentId } = req.body;
    const { user } = req; // Authenticated user from middleware

    // Validate required fields
    if (!talentId) {
      return res.status(400).json({ message: "Talent ID is required" });
    }

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the authenticated user is the client who created this job
    if (job.client.toString() !== user.id.toString()) {
      return res.status(403).json({
        message: "Only the job creator can reject applications",
      });
    }

    // Check if talent has applied for this job
    if (!job.applicants.includes(talentId)) {
      return res.status(400).json({
        message: "Talent has not applied for this job",
      });
    }

    // Reject the application
    job.applicants = job.applicants.filter(
      (applicant) => applicant.toString() !== talentId.toString()
    );

    if (!job.rejectedApplicants) job.rejectedApplicants = [];
    if (!job.rejectedApplicants.includes(talentId)) {
      job.rejectedApplicants.push(talentId);
    }

    await job.save();

    // Remove job from talent's applied jobs
    const talent = await Talent.findById(talentId);
    if (talent) {
      talent.jobsApplied = talent.jobsApplied.filter(
        (jobApplied) => jobApplied.toString() !== jobId.toString()
      );
      await talent.save();
    }

    res.status(200).json({
      message: "Job application rejected successfully",
      job: await Job.findById(jobId)
        .populate("client", "fullname email")
        .populate("applicants", "fullname email"),
    });
  } catch (error) {
    console.error("Error rejecting job application:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Mark job as completed by talent (talent submits work)
export const submitJobCompletion = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { completionNotes, deliverables } = req.body;
    const { user } = req; // Authenticated user from middleware

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the authenticated user is the assigned talent
    if (!job.talent || job.talent.toString() !== user.id.toString()) {
      return res.status(403).json({
        message: "Only the assigned talent can submit job completion",
      });
    }

    // Check if job is in progress
    if (job.status !== "in_progress") {
      return res.status(400).json({
        message: "Job must be in progress to submit completion",
      });
    }

    // Update job status to completed
    job.status = "completed";
    job.completedAt = new Date();
    job.completionNotes = completionNotes || "";
    job.deliverables = deliverables || [];
    job.awaitingClientApproval = true;

    await job.save();

    // Update talent's records
    const talent = await Talent.findById(user.id);
    if (talent) {
      // Move from in progress to completed
      if (talent.jobsInProgress) {
        talent.jobsInProgress = talent.jobsInProgress.filter(
          (jobInProgress) => jobInProgress.toString() !== jobId.toString()
        );
      }

      if (!talent.jobsCompleted) talent.jobsCompleted = [];
      if (!talent.jobsCompleted.includes(jobId)) {
        talent.jobsCompleted.push(jobId);
      }

      await talent.save();
    }

    res.status(200).json({
      message:
        "Job completion submitted successfully. Awaiting client approval.",
      job: await Job.findById(jobId)
        .populate("client", "fullname email")
        .populate("talent", "fullname email"),
    });
  } catch (error) {
    console.error("Error submitting job completion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Client accepts completed work and closes the job
export const acceptCompletionAndCloseJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { rating, feedback } = req.body;
    const { user } = req; // Authenticated user from middleware

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the authenticated user is the client who created this job
    if (job.client.toString() !== user.id.toString()) {
      return res.status(403).json({
        message: "Only the job creator can accept completion",
      });
    }

    // Check if job is completed and awaiting approval
    if (job.status !== "completed" || !job.awaitingClientApproval) {
      return res.status(400).json({
        message: "Job must be completed and awaiting approval",
      });
    }

    // Close the job
    job.status = "closed";
    job.closedAt = new Date();
    job.awaitingClientApproval = false;
    job.clientAccepted = true;
    job.clientRating = rating;
    job.clientFeedback = feedback || "";

    await job.save();

    // Update client's job count
    const client = await Client.findById(user.id);
    if (client) {
      client.totalJobsCreated = (client.totalJobsCreated || 0) + 1;
      client.totalJobsCompleted = (client.totalJobsCompleted || 0) + 1;
      await client.save();
    }

    // Update talent's records
    if (job.talent) {
      const talent = await Talent.findById(job.talent);
      if (talent) {
        talent.totalJobsCompleted = (talent.totalJobsCompleted || 0) + 1;
        talent.totalEarnings = (talent.totalEarnings || 0) + job.totalPrice;

        // Update ratings if provided
        if (rating) {
          if (!talent.ratings) talent.ratings = [];
          talent.ratings.push({
            jobId: jobId,
            rating: rating,
            feedback: feedback,
            clientId: user.id,
          });

          // Calculate average rating
          const totalRatings = talent.ratings.reduce(
            (sum, r) => sum + r.rating,
            0
          );
          talent.averageRating = totalRatings / talent.ratings.length;
        }

        await talent.save();
      }
    }

    res.status(200).json({
      message: "Job accepted and closed successfully",
      job: await Job.findById(jobId)
        .populate("client", "fullname email")
        .populate("talent", "fullname email"),
    });
  } catch (error) {
    console.error("Error accepting job completion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get jobs that are awaiting client approval
export const getJobsAwaitingApproval = async (req, res) => {
  try {
    const { user } = req; // Authenticated user from middleware

    const jobs = await Job.find({
      client: user.id,
      status: "completed",
      awaitingClientApproval: true,
    })
      .populate("client", "fullname email")
      .populate("talent", "fullname email")
      .sort({ completedAt: -1 });

    res.status(200).json({
      message: "Jobs awaiting approval fetched successfully",
      jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs awaiting approval:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get client's job statistics
export const getClientJobStats = async (req, res) => {
  try {
    const { user } = req; // Authenticated user from middleware

    const stats = await Job.aggregate([
      { $match: { client: user._id } },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
          totalSpent: { $sum: "$totalPrice" },
        },
      },
    ]);

    const formattedStats = {
      totalJobsPosted: 0,
      openJobs: 0,
      inProgressJobs: 0,
      completedJobs: 0,
      closedJobs: 0,
      totalSpent: 0,
    };

    stats.forEach((stat) => {
      formattedStats.totalJobsPosted += stat.count;
      formattedStats.totalSpent += stat.totalSpent;

      switch (stat._id) {
        case "open":
          formattedStats.openJobs = stat.count;
          break;
        case "in_progress":
          formattedStats.inProgressJobs = stat.count;
          break;
        case "completed":
          formattedStats.completedJobs = stat.count;
          break;
        case "closed":
          formattedStats.closedJobs = stat.count;
          break;
      }
    });

    res.status(200).json({
      message: "Client job statistics fetched successfully",
      stats: formattedStats,
    });
  } catch (error) {
    console.error("Error fetching client job stats:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update the existing getAllJobs function to exclude closed jobs
export const getAllJobs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      client,
      sortBy = "createdAt",
      order = "desc",
      search,
      minPrice,
      maxPrice,
      available,
    } = req.query;

    const filter = {};

    // Exclude closed jobs from public listing
    filter.status = { $ne: "closed" };

    // Filter by status if provided (but still exclude closed)
    if (status) {
      filter.status = status === "closed" ? { $ne: "closed" } : status;
    }

    // Filter by client ID if provided
    if (client) {
      filter.client = client;
    }

    // Search by title or detail if provided
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { detail: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      filter.totalPrice = {};
      if (minPrice) {
        filter.totalPrice.$gte = parseFloat(minPrice);
      }
      if (maxPrice) {
        filter.totalPrice.$lte = parseFloat(maxPrice);
      }
    }

    // Return only available jobs (jobs without assigned talent)
    if (available === "true") {
      filter.talent = null;
    }

    // Sorting order
    const sortOrder = order === "asc" ? 1 : -1;

    const jobs = await Job.find(filter)
      .populate("client", "fullname email")
      .populate("talent", "fullname email")
      .populate("applicants", "fullname email")
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalJobs = await Job.countDocuments(filter);

    res.status(200).json({
      jobs,
      pagination: {
        total: totalJobs,
        page: parseInt(page),
        pages: Math.ceil(totalJobs / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: error.message });
  }
};
