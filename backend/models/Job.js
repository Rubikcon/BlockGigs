// import mongoose from "mongoose";

// const MilestoneSchema = new mongoose.Schema({
//   deadline: Date,
//   amount: Number,
//   description: String,
// });

// const JobSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   detail: { type: String, required: true },
//   totalPrice: { type: Number, required: true },
//   milestone: { type: Number, required: true },
//   milestones: [MilestoneSchema],
//   status: {
//     type: String,
//     enum: ["open", "in_progress", "completed"],
//     default: "open",
//   },

//   client: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Client",
//     // required: true,
//   },
//   talent: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Talent",
//     // required: true,
//   },
//   applicants: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Talent",
//     },
//   ],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Job = mongoose.model("Job", JobSchema);
// export default Job;

// Updated Job Model
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
    enum: ["open", "in_progress", "completed", "closed"],
    default: "open",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  talent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Talent",
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Talent",
    },
  ],
  // NEW FIELDS
  rejectedApplicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Talent",
    },
  ],
  approvedAt: { type: Date },
  completedAt: { type: Date },
  closedAt: { type: Date },
  awaitingClientApproval: { type: Boolean, default: false },
  clientAccepted: { type: Boolean, default: false },
  completionNotes: { type: String },
  deliverables: [{ type: String }], // URLs or file paths
  clientRating: { type: Number, min: 1, max: 5 },
  clientFeedback: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Job = mongoose.model("Job", JobSchema);
export default Job;
