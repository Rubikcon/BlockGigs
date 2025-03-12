import User from "../models/User";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() + 9000000);
  return otp;
};

const sendOTP = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("User not found");
  }

  const otp = generateOTP();
  user.otp = otp;
  await user.save();
  // send the OTP to the user's email or phone number
  res.send("OTP sent successfully");
};

const verifyOTP = async (req, res) => {
  const { email } = req.body;
  const user = await findOne({ email });
  if (!user) {
    return res.status(404).send("User not found");
  }
  if (user.otp !== otp) {
    return res.status(401).send("Invalid OTP!");
  }

  user.isVerified = true;
  await user.save();
  const token = jwt.sign({ userId: user._id }, "secretkey");
  res.send({ token });
};

export { sendOTP, verifyOTP };
