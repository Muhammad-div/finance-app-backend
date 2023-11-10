const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extract the user ID from the JWT payload

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(500).json({ message: "Error fetching user profile" });
  }
};
