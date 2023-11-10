const mongoose = require("mongoose");

// Replace 'your_database_uri' with your actual MongoDB database URI
const databaseURI = "mongodb://localhost:27017/finanace-users";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(databaseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the application on database connection failure
  }
};

module.exports = connectToDatabase;
