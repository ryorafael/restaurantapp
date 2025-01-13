const User = require("../models/User"); // Match the capitalization exactly // Adjust the path to your User model
const sequelize = require("../config/sequelize"); // Adjust the path to your Sequelize instance

async function testUserModel() {
  try {
    // Sync the database (this ensures the tables are created; use with caution in production)
    await sequelize.sync({ force: false });

    console.log("Testing User model...");

    // 1. Create a User
    const newUser = await User.create({
      name: "Test User",
      email: "testuser@example.com",
      password: "hashedpassword123", // You can hash this later for production
      role: "admin",
    });
    console.log("New User Created:", newUser.toJSON());

    // 2. Find a User by Email
    const foundUser = await User.findOne({
      where: { email: "testuser@example.com" },
    });
    if (!foundUser) {
      console.log("User not found");
    } else {
      console.log("User Found:", foundUser.toJSON());
    }

    // 3. Update the User's Role
    const updatedUser = await foundUser.update({ role: "superadmin" });
    console.log("User Updated:", updatedUser.toJSON());

    // 4. Delete the User
    await foundUser.destroy();
    console.log("User Deleted Successfully");
  } catch (error) {
    console.error("Error during User model testing:", error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
}

testUserModel();
