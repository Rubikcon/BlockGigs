import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    wallet_address: { type: String, unique: true, sparse: true },
    fullname: { type: String, required: true },
    about: { type: String, required: true },
    email: { type: String, sparse: true }, // Sparse prevents errors when null
    password: { type: String },
    otp: { type: Number, index: true }, // Store OTP, index for fast search
    otpExpiresAt: { type: Date }, // OTP expiration time
    isVerified: { type: Boolean, default: false }, // Verification status
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

const Client = mongoose.model("Client", clientSchema);
export default Client;
