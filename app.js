const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// Other middleware setup and configurations here

// Mount the authentication routes under the '/auth' path
app.use("/auth", authRoutes);

// Mount the user-related routes under the '/user' path
app.use("/user", userRoutes);

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
