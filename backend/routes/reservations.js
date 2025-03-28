const express = require("express");
const router = express.Router();
const { Op } = require("sequelize"); // Import Sequelize operators
const Reservation = require("../models/reservation"); // Import the Reservation model
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware

router.get("/all", authMiddleware, async (req, res) => {
  try {
    console.log("cou cou");
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
      // where: {
      //   date: {
      //     [Op.gte]: new Date(), // Fetch reservations for today or later
      //   },
      // },
      order: [["date", "DESC"]], // Order by date, newest first
    });
    res.json(reservations); // Respond with reservations
  } catch (err) {
    console.error("Error fetching reservations:", err);
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
});

// Create a new reservation
router.post("/", async (req, res) => {
  // Log the incoming request body
  console.log("Request Body:", req.body);

  const { userId, guestEmail, guestPhone, name, date, time, partySize } =
    req.body;

  // Validate required fields
  if (!name || !date || !time || !partySize) {
    console.error("Validation Error: Missing fields");
    return res.status(400).json({ msg: "Please provide all required fields." });
  }

  try {
    const reservation = await Reservation.create({
      userId,
      guest_email: guestEmail,
      guest_phone: guestPhone,
      name,
      date,
      time,
      party_size: partySize,
    });

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

    console.log("PUT route hit with ID:", id);
    console.log("Request Body:", req.body);

    const [updatedRows] = await Reservation.update(
      { name, guest_email, guest_phone, date, time, party_size },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ msg: "Reservation not found or no changes made" }); // Handle case where no rows are updated
    }

    res.json({ msg: "Reservation updated successfully" }); // Respond with success
  } catch (err) {
    console.error("Error updating reservation:", err);
    console.log("PUT route hit with ID:", req.params.id, "and data:", req.body);
    res.status(500).json({ error: "Failed to update reservation" });
  }
});

// Get reservations for a specific user
router.get("/:userId", authMiddleware, async (req, res) => {
  const { userId } = req.params;

  try {
    const reservations = await Reservation.findAll({
      where: {
        userId,
      },
      order: [["date", "DESC"]], // Order by date, newest first
    });
    console.log(reservations);
    res.json(reservations); // Respond with reservations
  } catch (err) {
    console.error("Error fetching user reservations:", err);
    res.status(500).json({ error: "Failed to fetch user reservations" });
  }
});

module.exports = router;
