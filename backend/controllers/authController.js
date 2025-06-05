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

// Register with Email and Password
export const registerWithEmail = async (req, res) => {
  const {
    role,
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
    if (!role)
      return res.status(400).json({ message: "User role is required." });
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const Model = getUserModel(role);

    // Check if email already exists
    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = crypto.randomInt(100000, 999999); // Generate OTP

    const newUserData = {
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
      message: "User registered successfully. Proceed to login.",
      token,
      user: {
        id: newUser._id,
        role: newUser.role,
        email: newUser.email,
        isVerified: newUser.isVerified,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Register with Wallet Address
export const registerWithWallet = async (req, res) => {
  const {
    role,
    wallet_address,
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
    if (!role)
      return res.status(400).json({ message: "User role is required." });
    if (!wallet_address) {
      return res.status(400).json({ message: "Wallet address is required." });
    }

    const Model = getUserModel(role);

    // Check if wallet already exists
    const existingUser = await Model.findOne({ wallet_address });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this wallet already exists" });
    }

    const newUserData = {
      wallet_address,
      fullname: fullname || name,
      about,
      isVerified: true, // Wallet users are typically verified by their wallet connection
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
      message: "User registered successfully with wallet.",
      token,
      user: {
        id: newUser._id,
        role: newUser.role,
        wallet_address: newUser.wallet_address,
        isVerified: newUser.isVerified,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

export const verifyOTP = async (req, res) => {
  const { role, email, otp } = req.body;

  try {
    // const Model = getUserModel(role);
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

export const loginUser = async (req, res) => {
  const { email, wallet_address, password } = req.body;

  try {
    let userTalent = null;
    let userClient = null;
    let user = null;

    if (wallet_address) {
      userTalent = await Talent.findOne({ wallet_address });
      userClient = await Client.findOne({ wallet_address });

      if (!userTalent && !userClient) {
        return res
          .status(400)
          .json({ message: "No user found with this address" });
      }

      user = userTalent || userClient;
    } else if (email && password) {
      userTalent = await Talent.findOne({ email });
      userClient = await Client.findOne({ email });

      if (!userTalent && !userClient) {
        return res
          .status(400)
          .json({ message: "No user found with this email" });
      }

      const isMatchTalent =
        userTalent && (await bcrypt.compare(password, userTalent.password));
      const isMatchClient =
        userClient && (await bcrypt.compare(password, userClient.password));

      if (!isMatchTalent && !isMatchClient) {
        return res.status(400).json({ message: "Invalid password" });
      }

      user = isMatchTalent ? userTalent : userClient;
    } else {
      return res.status(400).json({ message: "Invalid login credentials" });
    }

    const token = generateToken(user._id, user.role);

    // convert user doc to plain object and remove password

    const userData = user.toObject();

    delete userData.password;

    res.status(200).json({
      message: "Login successful",
      token,

      user: userData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
