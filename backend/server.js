const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const reservationRoutes = require("./routes/reservations");
const sequelize = require("./config/sequelize"); // Import Sequelize instance

dotenv.config();
// Si le fichier .env.docker existe, on le charge
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

const PORT = process.env.PORT || 5000;

console.log("ENV VARS", {
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD ? "✔️" : "❌",
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
});

// Test Sequelize connection
sequelize
  .authenticate()
  .then(() => console.log("Sequelize connected to MySQL successfully"))
  .catch((err) => {
    console.error("Error connecting to MySQL with Sequelize:", err);
    process.exit(1); // Exit the process if there's an error
  });

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started on port ${PORT}`)
);
