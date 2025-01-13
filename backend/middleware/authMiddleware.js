const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    // Log the decoded user to check if role is included
    console.log("Decoded User:", req.user);

    // Check if the user is an admin
    if (req.user.role !== "admin") {
      console.log("Access Denied: User role is not admin.");
      return res.status(403).json({ msg: "Access denied, admin only." });
    }

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
