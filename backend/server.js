const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const reservationRoutes = require("./routes/reservations");
const db = require("./config/db");
// const userRoutes = require("./routes/user");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/reservations", reservationRoutes);
// app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); // Exit the process if there's an error
  } else {
    console.log("MySQL connected successfully");
  }
});
app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
