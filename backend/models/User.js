import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  wallet_address: String,
  // created_at: Date.now(),
});

const User = mongoose.model("User", userSchema);

export default User;
