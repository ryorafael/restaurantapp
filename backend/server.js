const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const reservationRoutes = require("./routes/reservations");
// const sequelize = require("./config/sequelize"); // Import Sequelize instance
const db = require("./models");
const sequelize = db.sequelize;

dotenv.config(); // (your original)
const fs = require("fs");
if (fs.existsSync(".env.docker")) {
  require("dotenv").config({ path: ".env.docker" });
} else {
  require("dotenv").config();
}

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/reservations", reservationRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

// (your original env log — kept)
console.log("ENV VARS", {
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD ? "✔️" : "❌",
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
});

// [JEST] Wrap startup so tests can import the app without connecting/listening
async function start() {
  try {
    await sequelize.authenticate();
    console.log("🔌 Connected to MySQL successfully");

    await sequelize.sync({ logging: console.log });
    console.log("All models synchronized");

    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log("Tables in DB after sync:", tables);

    app.listen(PORT, "0.0.0.0", () =>
      console.log(`Server started on port ${PORT}`)
    );
  } catch (err) {
    console.error("❌ Sequelize error:", err);
    process.exit(1);
  }
}

// [JEST] Only start the server when run directly (node server.js). When Jest
// requires this file, it will NOT connect to DB or listen on a port.
if (require.main === module) {
  start();
}

// [JEST] Export for tests (Supertest will import { app } to send requests)
module.exports = { app, sequelize };
