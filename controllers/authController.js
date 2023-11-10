const bcrypt = require("bcrypt");
const jwt = require("../config/jwt");
const User = require("../models/User");
const emailService = require("../services/emailService");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate a JWT token for the newly registered user
    const token = jwt.generateToken({ id: user._id, email: user.email });

    // Send a confirmation email (you can implement this logic in emailService)
    emailService.sendConfirmationEmail(user.email);

    res.status(201).json({ token, message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a JWT token for the logged-in user
    const token = jwt.generateToken({ id: user._id, email: user.email });

    res.json({ token, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};
