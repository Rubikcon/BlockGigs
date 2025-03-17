import mongoose from "mongoose";

const MilestoneSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String,
});

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  milestones: [MilestoneSchema],
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
