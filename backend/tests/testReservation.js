const sequelize = require("../config/sequelize");
const User = require("../models/User");
const Reservation = require("../models/reservation");

async function testReservationModel() {
  try {
    // Sync the database
    await sequelize.sync({ force: false });

    console.log("Testing Reservation model...");

    // Clear existing data
    await Reservation.destroy({ where: {} }); // Delete all reservations
    await User.destroy({ where: {} }); // Delete all users

    // 1. Create a User
    const user = await User.create({
      name: "Test User",
      email: "testuser@example.com",
      password: "hashedpassword123",
    });
    console.log("New User Created:", user.toJSON());

    // 2. Create a Reservation
    const reservation = await Reservation.create({
      user_id: user.id,
      date: "2025-01-14",
      time: "18:30",
      party_size: 4,
      guest_email: "guest@example.com",
      guest_phone: "1234567890",
    });
    console.log("New Reservation Created:", reservation.toJSON());

    // 3. Find Reservations for the User
    const userReservations = await Reservation.findAll({
      where: { user_id: user.id },
      include: { model: User, as: "user" },
    });
    console.log(
      "Reservations for User:",
      userReservations.map((r) => r.toJSON())
    );

    // 4. Delete the Reservation
    await reservation.destroy();
    console.log("Reservation Deleted Successfully");

    // 5. Delete the User
    await user.destroy();
    console.log("User Deleted Successfully");
  } catch (error) {
    console.error("Error during Reservation model testing:", error);
  } finally {
    await sequelize.close();
  }
}

testReservationModel();
