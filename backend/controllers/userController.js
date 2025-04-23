// controllers/userController.js
import Client from "../models/Client.js";
import Talent from "../models/Talent.js";
import bcrypt from "bcryptjs";
import { scheduleJob } from "node-schedule";

// Helper function to determine user model
const getUserModel = (role) => {
  if (role === "client") return Client;
  if (role === "talent") return Talent;
  throw new Error("Invalid user role");
};

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const { id, role } = req.params; // Now from URL params

    const Model = getUserModel(role);
    const user = await Model.findById(id).select(
      "-password -otp -otpExpiresAt"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const { id, role } = req.params;
    const updateData = req.body;

    const Model = getUserModel(role);

    // Prevent role or verification status changes
    if (updateData.role || updateData.isVerified) {
      return res.status(403).json({ message: "Unauthorized field update" });
    }

    // Handle password update
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await Model.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password -otp -otpExpiresAt");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Request account deletion
export const requestDeleteAccount = async (req, res) => {
  try {
    const { id, role } = req.params;
    const { confirmation } = req.body;

    if (confirmation !== "DELETE") {
      return res.status(400).json({
        message: "Please type DELETE to confirm account deletion",
      });
    }

    const Model = getUserModel(role);
    const user = await Model.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Mark for deletion
    user.markedForDeletion = true;
    user.deletionTime = new Date(Date.now() + 10 * 60 * 60 * 1000); // 2 hours from now
    await user.save();

    // Schedule deletion
    scheduleJob(user.deletionTime, async () => {
      try {
        await Model.findByIdAndDelete(id);
        console.log(`User ${id} deleted as scheduled`);
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    });

    res.status(200).json({
      message:
        "Account will be deleted in 2 hours. You can cancel this before then.",
      deletionTime: user.deletionTime,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel account deletion
export const cancelDeleteAccount = async (req, res) => {
  try {
    const { id, role } = req.params;

    const Model = getUserModel(role);
    const user = await Model.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.markedForDeletion) {
      return res
        .status(400)
        .json({ message: "Account is not marked for deletion" });
    }

    user.markedForDeletion = false;
    user.deletionTime = undefined;
    await user.save();

    res
      .status(200)
      .json({ message: "Account deletion cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const clients = await Client.find().select("-password -otp -otpExpiresAt");
    const talents = await Talent.find().select("-password -otp -otpExpiresAt");

    res.status(200).json({
      clients,
      talents,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
