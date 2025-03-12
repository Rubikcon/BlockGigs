import express from "express";
import DB from "./config/DB.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// import the and use the database configuration
DB();

// Calling the routes
app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/otp", otpRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
