const bcrypt = require("bcrypt");
const { sequelize, User } = require("../models");

(async () => {
  try {
    await sequelize.sync();

    const hashed = await bcrypt.hash("123456", 10);
    await User.create({
      name: "Admin",
      email: "ryorafael18@gmail.com",
      password: hashed,
      role: "admin",
    });

    console.log("Admin user inserted into test database.");
    process.exit(0);
  } catch (err) {
    console.error("Failed to seed admin user:", err);
    process.exit(1);
  }
})();
