const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ak364437:anna123anna@mydata.pzqrpbl.mongodb.net/potfoliyo?retryWrites=true&w=majority&appName=mydata");
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
