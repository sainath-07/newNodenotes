import express from "express";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorhandler.js";
import userRoute from "./routes/user.route.js";

const app = express();

// built in middleware
app.use(express.json());

// error handler middleware
app.use(errorHandler);

// route
app.use("/api", userRoute);

// run server.
const runServer = async () => {
  await connectDB();

  // run server on port 3000
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
};

runServer();
