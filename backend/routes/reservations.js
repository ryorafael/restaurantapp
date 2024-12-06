const express = require("express");
const db = require("../config/db");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/all", auth, (req, res) => {
  const { user } = req; // Get user data from JWT token
  console.log(user); // Log user data to check if the JWT is decoded correctly

  // Check if the user is an admin
  if (user.role !== "admin") {
    console.log("Access Denied: User role is not admin."); // Log why access is denied
    return res.status(403).json({ msg: "Access denied, admin only." });
  }

  // Fetch all reservations from the database
  db.query(
    "SELECT * FROM reservations ORDER BY date DESC", // Order by date, newest first
    (err, results) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Error retrieving reservations");
      }
      console.log(results); // Log the results to check if data is being retrieved correctly
      res.json(results); // Send back the reservations data
    }
  );
});

// Create a reservation (guest or logged-in user)
router.post("/", (req, res) => {
  const { user_id, guest_email, guest_phone, name, date, time, party_size } =
    req.body;

  // Basic validation
  if (!name || !date || !time || !party_size) {
    return res.status(400).json({ msg: "Please provide all required fields." });
  }

  // If logged-in user, use user_id, else use guest details
  const reservationData = user_id
    ? [user_id, name, date, time, party_size, guest_email, guest_phone]
    : [null, name, date, time, party_size, guest_email, guest_phone];

  // Insert reservation into the database
  db.query(
    "INSERT INTO reservations (user_id, name, date, time, party_size, guest_email, guest_phone) VALUES (?, ?, ?, ?, ?, ?, ?)",
    reservationData,
    (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Error creating reservation");
      }
      res.status(201).json({ msg: "Reservation created successfully!" });
    }
  );
});

// Get reservations for a specific user (for authenticated users)
router.get("/:user_id", (req, res) => {
  const { user_id } = req.params;

  db.query(
    "SELECT * FROM reservations WHERE user_id = ? ORDER BY date DESC",
    [user_id],
    (err, results) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Error retrieving reservations");
      }
      res.json(results); // Send back the reservations for this user
    }
  );
});

module.exports = router;
