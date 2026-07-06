import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.route.js";

const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/students", studentRoutes);

// Start Server
app.listen(3000, () => {

    console.log("Server running on port 3000");

});