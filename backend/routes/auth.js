const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db"); // Import MySQL connection
const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Log the incoming request body for debugging
  console.log(req.body);

  // Check if name, email, and password are provided
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide name, email, and password" });
  }

  try {
    // Check if user already exists
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.error("Database error:", err.message);
          return res.status(500).send("Server error");
        }
        if (results.length > 0) {
          return res.status(400).json({ msg: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user into the database
        db.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err, result) => {
            if (err) {
              console.error("Error inserting user:", err.message);
              return res.status(500).send("Server error");
            }
            const payload = { user: { id: result.insertId } }; // Use the inserted user ID

            // Generate a JWT token
            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              { expiresIn: 360000 },
              (err, token) => {
                if (err) {
                  console.error("JWT Error:", err.message);
                  return res.status(500).send("Server error");
                }
                res.json({ token });
              }
            );
          }
        );
      }
    );
  } catch (err) {
    console.error("Error in registration process:", err.message);
    res.status(500).send("Server error");
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide both email and password" });
  }

  try {
    // Find user by email
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.error("Database error:", err.message);
          return res.status(500).send("Server error");
        }
        if (results.length === 0) {
          return res.status(400).json({ msg: "Invalid credentials" });
        }

        const user = results[0]; // Get the first user (there should only be one since email is unique)

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Create JWT token
        const payload = { user: { id: user.id } };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 360000 },
          (err, token) => {
            if (err) {
              console.error("JWT Error:", err.message);
              return res.status(500).send("Server error");
            }
            res.json({ token });
          }
        );
      }
    );
  } catch (err) {
    console.error("Error in login process:", err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
