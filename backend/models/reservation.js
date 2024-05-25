const mongoose = require("mongoose");
const ReservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  partySize: { type: Number, required: true },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
