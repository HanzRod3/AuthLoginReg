import express from "express";
import { test } from "../controllers/user.controller.js"; // Import controller

const router = express.Router();

// Define a GET route that triggers the test function
router.get("/", test);

export default router;
