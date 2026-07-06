import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/fail", (req, res, next) => {
  const err = new Error("Something went wrong");
  err.statusCode = 400;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.statusCode).json({
    success: false,
    message: error.message || "Internal server error",
  });
});

// PORT
app.listen(3000, () => {
  console.log("Server is running on port :3000");
});
