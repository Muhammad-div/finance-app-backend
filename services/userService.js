const User = require("../models/User");

// Get user profile by ID
exports.getUserProfile = async (userId) => {
  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    throw error;
  }
};
