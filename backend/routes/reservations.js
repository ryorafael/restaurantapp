const express = require("express");
const router = express.Router();
const { Op } = require("sequelize"); // Import Sequelize operators
const db = require("../models");
const Reservation = db.Reservation; // Import the Reservation model
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware
const auth = require("../middleware/auth"); // ← simple auth middleware (not admin)

router.get("/all", authMiddleware, async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      attributes: [
        "id",
        "name",
        ["guest_email", "guestEmail"],
        ["guest_phone", "guestPhone"],
        "date",
        "time",
        ["party_size", "partySize"], // Alias party_size as partySize
      ],
      order: [["date", "DESC"]], // Order by date, newest first
    });
    res.json(reservations); // Respond with reservations
  } catch (err) {
    console.error("Error fetching reservations:", err);
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
});

// Create a new reservation
router.post("/", auth, async (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Request Body:", req.body);

  const user_id = req.user?.id || null;
  const { guestEmail, guestPhone, name, date, time, partySize } = req.body;

  // Validate required fields
  if (!name || !date || !time || !partySize) {
    console.error("Validation Error: Missing fields");
    return res.status(400).json({ msg: "Please provide all required fields." });
  }

  try {
    const reservation = await Reservation.create({
      user_id,
      guest_email: guestEmail,
      guest_phone: guestPhone,
      name,
      date,
      time,
      party_size: partySize,
    });

    console.log("Reservation created:", reservation.toJSON());
    res
      .status(201)
      .json({ msg: "Reservation created successfully!", reservation });
  } catch (err) {
    console.error("Error creating reservation:", err);
    res.status(500).send("Error creating reservation");
  }
});

// Delete a reservation
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params; // Get reservation ID from URL parameters
    const deletedRows = await Reservation.destroy({ where: { id } }); // Delete reservation

    if (deletedRows === 0) {
      return res.status(404).json({ msg: "Reservation not found" }); // Handle case where reservation does not exist
    }

    res.json({ msg: "Reservation deleted successfully" }); // Respond with success
  } catch (err) {
    console.error("Error deleting reservation:", err);
    console.log("DELETE route hit with ID:", req.params.id);
    res.status(500).json({ error: "Failed to delete reservation" });
  }
});

// Update a reservation
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params; // Get reservation ID from URL parameters
    const { name, guest_email, guest_phone, date, time, party_size } = req.body; // Extract data from the request body

    // console.log("PUT route hit with ID:", id);
    // console.log("Request Body:", req.body);

    const [updatedRows] = await Reservation.update(
      { name, guest_email, guest_phone, date, time, party_size },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ msg: "Reservation not found or no changes made" });
    }

    res.json({ msg: "Reservation updated successfully" }); // Respond with success
  } catch (err) {
    console.error("Error updating reservation:", err);
    console.log("PUT route hit with ID:", req.params.id, "and data:", req.body);
    res.status(500).json({ error: "Failed to update reservation" });
  }
});

// Get reservations for a specific user
router.get("/:userId", auth, async (req, res) => {
  const { userId } = req.params;
  // console.log("auth middleware hit");
  // console.log("req.user.id:", req.user.id);
  // console.log("userId from URL:", userId);

  if (parseInt(req.user.id) !== parseInt(userId)) {
    console.log("Access denied: user tried to access someone else's data");
    return res.status(403).json({ msg: "Access denied" });
  }

  try {
    const reservations = await Reservation.findAll({
      where: {
        user_id: userId,
      },
      order: [["date", "DESC"]],
    });

    console.log("Reservations found:", reservations);
    res.json(reservations);
  } catch (err) {
    console.error("Error fetching reservations:", err);
    res.status(500).json({ error: "Failed to fetch user reservations" });
  }
});

module.exports = router;
