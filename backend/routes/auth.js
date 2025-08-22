const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models"); // this loads models/index.js
const User = db.User;

// Register new user
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body; // Include role from the request body

  // Check if all required fields are provided
  if (!name || !email || !password || !role) {
    return res.status(400).json({
      msg: "Please provide name, email, password, and role",
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: user.role, // Include role in the payload
      },
    };

    // Generate a JWT token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 }, // 1 hour expiration
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            role: user.role,
          },
        });
      }
    );
  } catch (err) {
    console.error("Error in registration process:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request received:", req.body);
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide both email and password" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.error("JWT.sign error:", err.message);
          console.log("JWT_SECRET is:", JSON.stringify(process.env.JWT_SECRET));
          return res.status(500).send("Server error");
        }

        res.json({ token, user });
      }
    );
  } catch (err) {
    console.error("Login server error:", err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
