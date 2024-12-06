const bcrypt = require("bcryptjs");
const db = require("./config/db"); // Import MySQL connection

// The plain-text password you want to hash for Ryo (admin)
const password = "123456"; // Replace with Ryo's admin password

// Hash the password
bcrypt.genSalt(10, (err, salt) => {
  if (err) throw err;
  bcrypt.hash(password, salt, (err, hashedPassword) => {
    if (err) throw err;

    // Log the hashed password (for verification purposes)
    console.log("Hashed Password:", hashedPassword);

    // Update the password for Ryo (admin) in the database
    db.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashedPassword, "ryorafael18@gmail.com"], // Update with Ryo's email
      (err, result) => {
        if (err) {
          console.error("Error updating password:", err.message);
          return;
        }
        console.log("Password updated successfully for Ryo (admin)!");
      }
    );
  });
});
