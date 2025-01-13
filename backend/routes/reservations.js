const express = require("express");
const router = express.Router();
const { Op } = require("sequelize"); // Import Sequelize operators
const Reservation = require("../models/reservation"); // Import the Reservation model

// Fetch reservations for today or later
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      where: {
        date: {
          [Op.gte]: new Date(), // Use Sequelize operator
        },
      },
    });

    res.json(reservations); // Respond with reservations
  } catch (err) {
    console.error("Error fetching reservations:", err);
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
});

module.exports = router;
