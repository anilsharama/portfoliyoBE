const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const contactRoutes = require("./routers/contactRoutes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/contact",contactRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
