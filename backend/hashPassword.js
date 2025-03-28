const bcrypt = require("bcryptjs");
const User = require("./models/User"); // Import Sequelize User model

const email = "ryorafael18@gmail.com"; // Admin email
const password = "123456"; // Password to hash and update

(async () => {
  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Hashed Password:", hashedPassword);

    // Update the user's password in the database
    const [updated] = await User.update(
      { password: hashedPassword },
      { where: { email } }
    );

    if (updated) {
      console.log(`Password updated successfully for ${email}!`);
    } else {
      console.log(`No user found with email: ${email}`);
    }
  } catch (err) {
    console.error("Error updating password:", err.message);
  }
})();
