import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

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

app.listen(8004, () => {
  console.log("Server is running on http://localhost:8004");
});
