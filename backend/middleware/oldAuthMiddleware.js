import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization
    // &&
    // req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { id: decoded.id, role: decoded.role };
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  }

  if (!token)
    return res.status(401).json({ message: "Not authorized, no token" });
};
// import jwt from "jsonwebtoken";
// import User from "../models/User.js"; // Ensure this points to your User model
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
import Client from "../models/Client.js"; // Ensure the correct path
// dotenv.config();

export const authenticate = async (req, res, next) => {
  // const token = req.header("Authorization")?.replace("Bearer ", "");

  // if (!token) {
  //   return res.status(401).json({ message: "No token provided, Unauthorized" });
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   console.log("Decoded Token:", decoded); // Debugging

  //   req.user = { id: decoded.id, role: decoded.role }; // Ensure req.user is set

  //   console.log("User in Request:", req.user); // Debugging

  //   next();
  // } catch (error) {
  //   res.status(401).json({ message: "Invalid token, Unauthorized" });
  // }
  console.log("createjob called");
  next();
};
