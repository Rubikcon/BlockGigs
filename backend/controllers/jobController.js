import Job from "../models/Job.js";

// export const createJob = async (req, res) => {
//   try {
//     // Ensure only clients can create jobs
//     if (req.user.role !== "client") {
//       return res.status(403).json({ message: "Only clients can create jobs" });
//     }

//     const { title, description, totalPrice, milestones } = req.body;

//     const job = new Job({
//       title,
//       description,
//       totalPrice,
//       milestones,
//       client: req.user._id, // Assign the job to the authenticated client
//     });

//     await job.save();
//     res.status(201).json(job);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

export const createJob = async (req, res) => {
  try {
    // console.log("User Data from Middleware:", req.user);

    // Ensure only clients can create jobs
    // if (req.user.role !== "client") {
    //   return res.status(403).json({ message: "Only clients can create jobs" });
    // }

    const { title, detail, totalPrice, milestones, milestone } = req.body;
    console.log(req.body, "controller")
    if (!title || !detail || !totalPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // const job = new Job({
    //   // title,
    //   // detail,
    //   // totalPrice,
    //   // milestone,
    //   // milestones,
    //   // client: req.user.id, // Attach logged-in client ID
    // });

    const job = new Job(req.body)
    await job.save();
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    console.error("Error Creating Job:", error);
    res.json({
      status: 501,
      message: "Internal Server Error"
    });
  }
};

export const assignFreelancer = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });
    job.freelancer = req.body.freelancer;
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId).populate(
      "client",
      "name email"
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: { $ne: "completed" } }) // Exclude completed jobs
      .populate("client", "fullname email") // Populate client details
      .populate("talent", "fullname email"); // Populate talent details if assigned

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const completeJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { user } = req; // User from authentication middleware

    // Find job
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Ensure only the assigned talent can complete the job
    if (!job.talent || job.talent.toString() !== user.id) {
      return res
        .status(403)
        .json({ message: "You are not assigned to this job" });
    }

    // Update job status
    job.status = "completed";
    await job.save();

    res.status(200).json({ message: "Job marked as completed", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { applicantId } = req.body; // Applicant ID from request body

    if (!applicantId) {
      return res.status(400).json({ message: "Applicant ID is required" });
    }

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Check if the job is already assigned
    if (job.talent) {
      return res
        .status(400)
        .json({ message: "This job has already been assigned" });
    }

    // Check if the applicant has already applied
    if (job.applicants.includes(applicantId)) {
      return res
        .status(400)
        .json({ message: "You have already applied for this job" });
    }

    // Add the applicant's ID to the job's applicants list
    job.applicants.push(applicantId);
    await job.save();

    res
      .status(200)
      .json({ message: "Application submitted successfully", job });
  } catch (error) {
    console.error("Error Applying for Job:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
