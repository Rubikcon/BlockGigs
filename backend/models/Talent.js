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
    otp: { type: Number, index: true }, // Indexed for fast lookups
    markedForDeletion: { type: Boolean, default: false },
    deletionTime: { type: Date },
    otpExpiresAt: { type: Date, index: true },
    // other fields...

    jobsApplied: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true } // Adds createdAt & updatedAt fields automatically
);

const Talent = mongoose.model("Talent", talentSchema);
export default Talent;
