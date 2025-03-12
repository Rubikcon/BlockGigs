import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    wallet_address: { type: String, unique: true },
    otp: { type: Number }, // Store OTP
    otpExpiresAt: { type: Date }, // OTP expiration time
    isVerified: { type: Boolean, default: false }, // Verification status
  },
  { timestamps: true }
); // Adds createdAt & updatedAt fields automatically

const User = mongoose.model("User", userSchema);

export default User;
