const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Get user profile (protected route)
router.get(
  "/profile",
  authMiddleware.verifyToken,
  userController.getUserProfile
);

module.exports = router;
