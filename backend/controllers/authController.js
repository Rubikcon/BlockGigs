import Client from "../models/Client.js";
import Talent from "../models/Talent.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import dotenv from "dotenv";
import nodemailer from "nodemailer"; // For sending OTP emails

dotenv.config();

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Determine user type dynamically
const getUserModel = (role) => {
  if (role === "client") return Client;
  if (role === "talent") return Talent;
  throw new Error("Invalid user role");
};

// Register user without sending OTP
// export const registerUser = async (req, res) => {
//   const { role, wallet_address, email, password, fullname, name, about } =
//     req.body;

//   try {
//     const Model = getUserModel(role);

//     let existingUser = await Model.findOne({
//       $or: [{ email }, { wallet_address }],
//     });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
//     const otp = crypto.randomInt(100000, 999999); // Generate OTP

//     const newUser = await Model.create({
//       wallet_address,
//       email,
//       password: hashedPassword,
//       fullname: fullname || name,
//       about,
//       otp,
//       otpExpiresAt: new Date(Date.now() + 15 * 60 * 1000),
//       isVerified: false, // Initially unverified
//     });

//     // Generate JWT token

//     const token = generateToken(newUser._id, role);

//     res.status(201).json({
//       message: "User registered successfully",
//       token,

//       user: {
//         id: newUser._id,
//         email: newUser.email,
//         isVerified: newUser.isVerified,
//       },
//     });

//     // res
//     //   .status(201)
//     //   .json({ message: "User registered successfully", id: newUser._id });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Register user dynamically
export const registerUser = async (req, res) => {
  const {
    role,
    wallet_address,
    email,
    password,
    fullname,
    name,
    about,
    pseudonym,
    profession,
    min_pay,
    timezone,
    languages,
    skills,
  } = req.body;

  try {
    const Model = getUserModel(role);

    let existingUser = await Model.findOne({
      $or: [{ email }, { wallet_address }],
    });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Validate registration method
    if (!wallet_address && (!email || !password)) {
      return res.status(400).json({ message: "Invalid registration method" });
    }

    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    const otp = crypto.randomInt(100000, 999999); // Generate OTP

    const newUserData = {
      wallet_address,
      email,
      password: hashedPassword,
      fullname: fullname || name,
      about,
      otp,
      otpExpiresAt: new Date(Date.now() + 15 * 60 * 1000),
      isVerified: false,
    };

    // Add talent-specific fields
    if (role === "talent") {
      newUserData.pseudonym = pseudonym;
      newUserData.profession = profession;
      newUserData.min_pay = min_pay;
      newUserData.timezone = timezone;
      newUserData.languages = languages;
      newUserData.skills = skills;
    }

    const newUser = await Model.create(newUserData);

    // Generate JWT token
    const token = generateToken(newUser._id, role);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        wallet_address: newUser.wallet_address,
        isVerified: newUser.isVerified,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Request OTP (send OTP email)
// export const requestOTP = async (req, res) => {
//   return res.send("OTP endpoint hit");
// };

export const requestOTP = async (req, res) => {
  const { role, email } = req.body;

  try {
    const Model = getUserModel(role);
    const user = await Model.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please register first." });
    }

    // Generate a new OTP for existing user
    user.otp = crypto.randomInt(100000, 999999);
    user.otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 min expiry
    await user.save();

    // Send OTP email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Verification",
      text: `Your OTP code is: ${user.otp}. It will expire in 15 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const verifyOTP = async (req, res) => {
//   const { role, email, otp } = req.body;

//   try {
//     const Model = getUserModel(role);
//     const user = await Model.findOne({ email });

//     if (!user) return res.status(400).json({ message: "User not found" });

//     if (!user.otp || user.otpExpiresAt < new Date()) {
//       return res.status(400).json({ message: "OTP has expired" });
//     }

//     if (user.otp !== Number(otp)) {
//       return res.status(400).json({ message: "Invalid OTP" });
//     }

//     user.isVerified = true;
//     user.otp = null;
//     user.otpExpiresAt = null;
//     await user.save();

//     return res.status(200).json({ message: "OTP verified successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const verifyOTP = async (req, res) => {
  const { role, email, otp } = req.body;

  try {
    const Model = getUserModel(role);
    const user = await Model.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    if (!user.otp || user.otpExpiresAt < new Date()) {
      return res
        .status(400)
        .json({ message: "OTP has expired. Request a new one." });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User is already verified." });
    }

    if (user.otp !== Number(otp)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = null;
    user.otpExpiresAt = null;
    await user.save();

    return res.status(200).json({
      message: "OTP verified successfully. Your account is now active.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user (without OTP verification requirement)

// export const loginUser = async (req, res) => {
//   const { role, email, wallet_address, password } = req.body;

//   try {
//     const Model = getUserModel(role);

//     let user = null;

//     // Determine login method (either email & password or wallet_address)
//     if (email && password) {
//       user = await Model.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: "User not found" });
//       }

//       if (!user.password) {
//         return res
//           .status(400)
//           .json({ message: "Password not set for this account" });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: "Invalid password" });
//       }
//     } else if (wallet_address) {
//       user = await Model.findOne({ wallet_address });
//       if (!user) {
//         return res.status(400).json({ message: "User not found" });
//       }
//     } else {
//       return res.status(400).json({ message: "Invalid login credentials" });
//     }

//     // Generate JWT token
//     const token = generateToken(user._id, role);

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         email: user.email || null,
//         wallet_address: user.wallet_address || null,
//         isVerified: user.isVerified,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const loginUser = async (req, res) => {
//   const { email, wallet_address, password } = req.body;

//   try {
//     let user;

//     if (wallet_address) {
//       // Login using only the wallet address
//       user = await User.findOne({ wallet_address });

//       if (!user) {
//         return res.status(400).json({ message: "User not found" });
//       }
//     } else if (email && password) {
//       // Login using email & password
//       user = await User.findOne({ email });

//       if (!user) {
//         return res.status(400).json({ message: "User not found" });
//       }

//       if (!user.password) {
//         return res
//           .status(400)
//           .json({ message: "Password not set for this account" });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: "Invalid password" });
//       }
//     } else {
//       return res.status(400).json({ message: "Invalid login credentials" });
//     }

//     // Generate JWT token
//     const token = generateToken(user._id, user.role);

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         email: user.email || null,
//         wallet_address: user.wallet_address || null,
//         role: user.role,
//         isVerified: user.isVerified,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const loginUser = async (req, res) => {
  const { email, wallet_address, password } = req.body;

  try {
    let user;

    if (wallet_address) {
      // Login using only the wallet address
      user =
        (await Talent.findOne({ wallet_address })) ||
        (await Client.findOne({ wallet_address }));

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
    } else if (email && password) {
      // Login using email & password
      user =
        (await Talent.findOne({ email })) || (await Client.findOne({ email }));

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      if (!user.password) {
        return res
          .status(400)
          .json({ message: "Password not set for this account" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
    } else {
      return res.status(400).json({ message: "Invalid login credentials" });
    }

    // Generate JWT token
    const token = generateToken(user._id, user.role);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email || null,
        wallet_address: user.wallet_address || null,
        role: user.role,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
