import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"; // Import user routes
import authRoutes from "./routes/auth.route.js"; // Import auth routes

dotenv.config(); // Load environment variables from .env

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use user routes with "/api/user" as the base URL
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Start server on port 8004
app.listen(8004, () => {
  console.log("Server is running on http://localhost:8004");
});
