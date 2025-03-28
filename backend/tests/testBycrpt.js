const bcrypt = require("bcryptjs");

const enteredPassword = "123456"; // The password you're entering during login
const storedPassword =
  "$2a$10$XlO8rLnBd/dFzqgfNwZkFOUJmwoPBPqAdnme8qz14Nwi8ERloQ6ti"; // The hashed password from your database

// Compare entered password with stored hash
bcrypt.compare(enteredPassword, storedPassword, (err, isMatch) => {
  if (err) {
    console.error("Error comparing passwords:", err.message);
    return;
  }

  console.log("Password Match:", isMatch); // Should print true if the passwords match
});
