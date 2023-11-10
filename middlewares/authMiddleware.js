const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token using the jwt.verify method
  jwt.verify(token, "test", (error, decoded) => {
    if (error) {
      console.error("Token verification error:", error);
      res.status(401).json({ message: "Invalid token" });
    } else {
      req.user = decoded;
      next();
    }
  });
};
