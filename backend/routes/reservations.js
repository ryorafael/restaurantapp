const express = require("express");
const auth = require("../middleware/auth.js");
const Reservation = require("../models/reservation");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { date, time, partySize } = req.body;
  try {
    const newReservation = new Reservation({
      user: req.user.id,
      date,
      time,
      partySize,
    });
    const reservation = await newReservation.save();
    res.json(reservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(reservations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
