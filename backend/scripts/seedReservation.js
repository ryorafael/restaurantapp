require("dotenv").config();
const { sequelize, User, Reservation } = require("../models");

(async () => {
  try {
    const user = await User.findOne({
      where: { email: "ryorafael18@gmail.com" },
    });

    if (!user) {
      console.error("Admin user not found. Make sure seedAdmin ran first.");
      process.exit(1);
    }

    await Reservation.create({
      user_id: user.id,
      name: "Playwright Guest",
      date: new Date().toISOString().slice(0, 10),
      time: "18:00",
      party_size: 2,
      guest_email: "guest@example.com",
      guest_phone: "1234567890",
    });

    console.log("Reservation seeded successfully.");
  } catch (err) {
    console.error("Error seeding reservation:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
})();
