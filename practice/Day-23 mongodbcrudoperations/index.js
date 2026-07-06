import express from "express";
import studentRoutes from "./routes/student.route.js";
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());

app.use("/students", studentRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(3000, () => {
    console.log("Server Running on Port 3000");
  });
};

startServer();
