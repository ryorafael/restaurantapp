require("dotenv").config();
const bcrypt = require("bcryptjs");
const { sequelize } = require("./models");
const db = require("./models");
const User = db.User;

const email = "ryorafael18@gmail.com";
const password = "LeFouFrog!Admin2025";

(async () => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Hashed Password:", hashedPassword);

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
  } finally {
    await sequelize.close();
  }
})();
