// import mongoose from "mongoose";

// const clientSchema = new mongoose.Schema(
//   {
//     wallet_address: { type: String, unique: true, sparse: true },
//     fullname: { type: String, required: true },
//     role: { type: String, default: "client" },
//     about: { type: String, required: true },
//     email: { type: String, sparse: true }, // Sparse prevents errors when null
//     password: { type: String },
//     otp: { type: Number, index: true }, // Store OTP, index for fast search
//     otpExpiresAt: { type: Date }, // OTP expiration time
//     markedForDeletion: { type: Boolean, default: false },
//     deletionTime: { type: Date },
//     isVerified: { type: Boolean, default: false }, // Verification status
//   },
//   { timestamps: true } // Adds createdAt and updatedAt automatically
// );

// const Client = mongoose.model("Client", clientSchema);
// export default Client;

// Updated Client Model
import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    wallet_address: { type: String, unique: true, sparse: true },
    fullname: { type: String, required: true },
    role: { type: String, default: "client" },
    about: { type: String, required: true },
    email: { type: String, sparse: true },
    password: { type: String },
    otp: { type: Number, index: true },
    otpExpiresAt: { type: Date },
    markedForDeletion: { type: Boolean, default: false },
    deletionTime: { type: Date },
    isVerified: { type: Boolean, default: false },
    // NEW FIELDS
    totalJobsCreated: { type: Number, default: 0 },
    totalJobsCompleted: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
export default Client;
