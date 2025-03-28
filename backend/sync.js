const sequelize = require("../backend/config/sequelize"); // Adjust the path to sequelize.js

(async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync the database schema
    console.log("Database schema updated successfully.");
    process.exit(0); // Exit the process
  } catch (err) {
    console.error("Error syncing database schema:", err);
    process.exit(1);
  }
})();
