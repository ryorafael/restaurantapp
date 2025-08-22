const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const db = require("../models");
const Reservation = db.Reservation;
const authMiddleware = require("../middleware/authMiddleware");
const auth = require("../middleware/auth");

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
        ["party_size", "partySize"],
      ],
      order: [["date", "DESC"]],
    });
    res.json(reservations);
  } catch (err) {
    console.error("Error fetching reservations:", err);
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
});

router.post("/", async (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Request Body:", req.body);

  const user_id = req.user?.id || null;
  const { guestEmail, guestPhone, name, date, time, partySize } = req.body;

  // Validation: name, date, time required
  if (!name || !date || !time) {
    console.error("Validation Error: Missing fields");
    return res
      .status(400)
      .json({ msg: "Please provide name, date, and time." });
  }

  // Validation: at least one contact method required
  if (
    (!guestEmail || guestEmail.trim() === "") &&
    (!guestPhone || guestPhone.trim() === "")
  ) {
    console.error("Validation Error: No contact info");
    return res.status(400).json({
      msg: "Please provide at least an email or phone number for contact.",
    });
  }

  if (!partySize || isNaN(partySize) || Number(partySize) <= 0) {
    console.error("Validation Error: Invalid party size");
    return res.status(400).json({
      msg: "Please provide a valid party size (must be a number greater than 0).",
    });
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
    const { name, guestEmail, guestPhone, date, time, partySize } = req.body;

    const [updatedRows] = await Reservation.update(
      {
        name,
        guest_email: guestEmail,
        guest_phone: guestPhone,
        date,
        time,
        party_size: partySize,
      },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res
        .status(404)
        .json({ msg: "Reservation not found or no changes made" });
    }

    res.json({ msg: "Reservation updated successfully" });
  } catch (err) {
    console.error("Error updating reservation:", err);
    console.log("PUT route hit with ID:", req.params.id, "and data:", req.body);
    res.status(500).json({ error: "Failed to update reservation" });
  }
});

router.get("/:userId", auth, async (req, res) => {
  const { userId } = req.params;

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
