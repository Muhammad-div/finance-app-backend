const express = require("express");
const connectToDatabase = require("./config/database");
const app = express();
const cors = require("cors");

// Configure database connection
connectToDatabase();

app.use(cors()); // Enable CORS for all routes

// Middleware setup (body parsing, logging, etc.)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Include your other middleware and configurations here

// Include your route mounting here
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
