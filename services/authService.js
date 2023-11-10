const bcrypt = require("bcrypt");
const jwt = require("../config/jwt");
const User = require("../models/User");

// Register a new user
exports.registerUser = async (name, email, password) => {
  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email already in use");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate a JWT token for the newly registered user
    const token = jwt.generateToken({ id: user._id, email: user.email });

    return token;
  } catch (error) {
    throw error;
  }
};

// Login and return a JWT token
exports.loginUser = async (email, password) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    // Generate a JWT token for the logged-in user
    const token = jwt.generateToken({ id: user._id, email: user.email });

    return token;
  } catch (error) {
    throw error;
  }
};
