// import mongoose from "mongoose";

// const talentSchema = new mongoose.Schema(
//   {
//     fullname: { type: String, required: true },
//     work_name: { type: String },
//     profession: { type: String },
//     role: { type: String, default: "talent" },
//     min_pay: { type: Number },
//     time_zone: { type: String },
//     about: { type: String },
//     languages: { type: [String], default: [] },
//     skills: { type: [String], default: [] },
//     email: { type: String, unique: true, sparse: true },
//     password: { type: String },
//     wallet_address: { type: String, unique: true, sparse: true },
//     otp: { type: Number, index: true }, // Indexed for fast lookups
//     markedForDeletion: { type: Boolean, default: false },
//     deletionTime: { type: Date },
//     otpExpiresAt: { type: Date, index: true },
//     // other fields...

//     jobsApplied: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Job",
//       },
//     ],
//     isVerified: { type: Boolean, default: false },
//   },
//   { timestamps: true } // Adds createdAt & updatedAt fields automatically
// );

// const Talent = mongoose.model("Talent", talentSchema);
// export default Talent;

// Updated Talent Model
import mongoose from "mongoose";

const talentSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    work_name: { type: String },
    profession: { type: String },
    role: { type: String, default: "talent" },
    min_pay: { type: Number },
    time_zone: { type: String },
    about: { type: String },
    languages: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    email: { type: String, unique: true, sparse: true },
    password: { type: String },
    wallet_address: { type: String, unique: true, sparse: true },
    otp: { type: Number, index: true },
    markedForDeletion: { type: Boolean, default: false },
    deletionTime: { type: Date },
    otpExpiresAt: { type: Date, index: true },
    jobsApplied: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    // NEW FIELDS
    jobsInProgress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    jobsCompleted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    totalJobsCompleted: { type: Number, default: 0 },
    totalEarnings: { type: Number, default: 0 },
    ratings: [
      {
        jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
        rating: { type: Number, min: 1, max: 5 },
        feedback: { type: String },
        clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    averageRating: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Talent = mongoose.model("Talent", talentSchema);
export default Talent;
