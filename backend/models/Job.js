import mongoose from "mongoose";

const MilestoneSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String,
});

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  detail: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  milestone: { type: String, required: true },
  milestones: [MilestoneSchema],
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  talent: { type: String, required: false, default: null },
  // talent: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Talent",
  //   required: true,
  // },
  accepted: { type: Boolean, required: false }
});

const Job = mongoose.model("Job", JobSchema);
export default Job;
