const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("restaurant_db", "root", "Ilovenaib12!!", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize connected to the database successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
