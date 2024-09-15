import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Signup route
router.post("/signup", signup); // Implemented signup route

export default router;
