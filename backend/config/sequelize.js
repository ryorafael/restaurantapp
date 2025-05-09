const { Sequelize } = require("sequelize");
require("dotenv").config();

// SAFE DEBUG: Log presence (not values) of env vars
console.log("DB env loaded:", {
  DB_USERNAME: !!process.env.DB_USERNAME,
  DB_PASSWORD: !!process.env.DB_PASSWORD,
  DB_NAME: !!process.env.DB_NAME,
  DB_HOST: !!process.env.DB_HOST,
});

// Set up the Sequelize connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  }
);

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Sequelize connected to the database successfully.");
  })
  .catch((err) => {
    console.error("❌ Unable to connect to the database:", err);
  });

module.exports = sequelize;
