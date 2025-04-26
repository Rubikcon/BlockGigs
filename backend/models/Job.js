import mongoose from "mongoose";

const MilestoneSchema = new mongoose.Schema({
  deadline: Date,
  amount: Number,
  description: String,
});

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  detail: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  milestone: { type: Number, required: true },
  milestones: [MilestoneSchema],
  status: {
    type: String,
    enum: ["open", "in_progress", "completed"],
    default: "open",
  },

  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    // required: true,
  },
  talent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Talent",
    // required: true,
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Talent",
    },
  ],
});

const Job = mongoose.model("Job", JobSchema);
export default Job;
