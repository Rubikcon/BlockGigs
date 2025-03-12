// import User from "../models/User";
// import jwt from "jsonwebtoken";
// import mongoose from "mongoose";
// import sendEmail from "../utils/sendEmail";

// const generateOTP = () => {
//   const otp = Math.floor(100000 + Math.random() + 9000000);
//   return otp;
// };

// const sendOTP = async (req, res) => {
//   const { email } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(401).send("User not found");
//   }

//   const otp = generateOTP();
//   user.otp = otp;
//   await user.save();
//   // send the OTP to the user's email or phone number
//   //send OTP using the utility function
//   const emailSent = await sendEmail(email, "Your OTP code", `Your OTP code is ${otp}. It expires in 10 minutes`),
// if(!emailSent){
//   return res.status(500).send("Failed to send OTP. Please try again")
// }
//   res.send("OTP sent successfully");
// };

// const verifyOTP = async (req, res) => {
//   const { email } = req.body;
//   const user = await findOne({ email });
//   if (!user) {
//     return res.status(404).send("User not found");
//   }
//   if (user.otp !== otp) {
//     return res.status(401).send("Invalid OTP!");
//   }

//   user.isVerified = true;
//   await user.save();
//   const token = jwt.sign({ userId: user._id }, "secretkey");
//   res.send({ token });
// };

// export { sendOTP, verifyOTP };

import User from "../models/User";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import sendEmail from "../utils/sendEmail";

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
};

const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("User not found");
    }

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); //expires in 10 minutes
    await user.save();

    // Send OTP using the utility function
    const emailSent = await sendEmail(
      email,
      "Your OTP Code",
      `Your OTP code is: ${otp}. It expires in 10 minutes.`
    );

    if (!emailSent) {
      return res.status(500).send("Failed to send OTP. Please try again.");
    }

    res.send("OTP sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending OTP");
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (!user.otp || user.otp !== parseInt(otp)) {
      return res.status(401).send("Invalid OTP!");
    }

    // check if OTP is expired
    if (user.otpExpiresAt && user.otpExpiresAt < new Date()) {
      return res.status(400).send("OTP expired. please request a new one");
    }

    user.isVerified = true;
    user.otp = null; // Clear OTP after verification
    user.otpExpiresAt = null;
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error verifying OTP");
  }
};

export { sendOTP, verifyOTP };
