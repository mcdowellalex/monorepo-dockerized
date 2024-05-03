import express from "express";
const router = express.Router();
import { User } from "../models/user.mjs";

router.get("/", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    // Send the users as the response
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
