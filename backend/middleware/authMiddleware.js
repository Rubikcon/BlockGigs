import jwt from "jsonwebtoken";
import Client from "../models/Client.js"; // Adjust path as needed
import Talent from "../models/Talent.js"; // Adjust path as needed

const getUserModel = (role) => {
  if (role === "client") return Client;
  if (role === "talent") return Talent;
  throw new Error("Invalid user role");
};

export const authenticate = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    // Check if it starts with "Bearer "
    if (!authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Invalid token format. Use Bearer <token>" });
    }

    // Extract token
    const token = authHeader.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from database
    const Model = getUserModel(decoded.role);
    const user = await Model.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Set user in request
    req.user = {
      id: user._id,
      role: decoded.role,
      email: user.email,
      fullname: user.fullname,
    };

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(500).json({ message: "Server error in authentication" });
  }
};

export const requireClient = (req, res, next) => {
  if (req.user.role !== "client") {
    return res.status(403).json({ message: "Client access required" });
  }
  next();
};

export const requireTalent = (req, res, next) => {
  if (req.user.role !== "talent") {
    return res.status(403).json({ message: "Talent access required" });
  }
  next();
};
