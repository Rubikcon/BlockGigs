import mongoose, { mongo } from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  // created_at: Date.now(),
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
  