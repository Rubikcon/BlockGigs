// controllers/jobController.js
import Job from "../models/Job.js";

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

// export const createJob = async (req, res) => {
//   try {
//     const { title, detail, totalPrice, milestone, milestones } = req.body;

//     // Validate required fields
//     if (!title || !detail || !totalPrice || milestone === undefined) {
//       return res.status(400).json({
//         message:
//           "All fields (title, detail, totalPrice, milestone) are required",
//       });
//     }

//     // Create new job document
//     const job = new Job({
//       title,
//       detail,
//       totalPrice,
//       milestone,
//       milestones,
//       // client: req.user._id, // Assuming req.user is set by authentication middleware
//     });

//     await job.save();

//     res.status(201).json({ message: "Job created successfully", job });
//   } catch (error) {
//     console.error("Error Creating Job:", error);
//     res.json({
//       status: 501,
//       message: "Internal Server Error"
//     });
//   }
// };

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

// Get a single job by ID
// export const getJob = async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.jobId)
//       .populate("client", "fullname email")
//       .populate("talent", "fullname email");

//     if (!job) return res.status(404).json({ message: "Job not found" });

//     res.status(200).json(job);
//   } catch (error) {
//     console.error("Error Getting Job:", error);
//     res.status(500).json({ message: error.message });
//   }

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

// controllers/jobController.js

// Get all jobs with pagination, filtering, and sorting
// controllers/jobController.js

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

    // Filter by status if provided
    if (status) {
      filter.status = status;
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

    res
      .status(200)
      .json({ message: "Application submitted successfully", job });
  } catch (error) {
    console.error("Error Applying for Job:", error);
    res.status(500).json({ message: error.message });
  }
};
