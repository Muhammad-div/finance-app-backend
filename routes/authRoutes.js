const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Registration route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

// Example protected route (requires a valid JWT token)
router.get("/protected", authMiddleware.verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

module.exports = router;
