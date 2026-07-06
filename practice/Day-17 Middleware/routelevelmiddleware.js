import express from "express";
import path from "path";
import userRoute from "./users.routes.js";

const app = express();

// middleware -1
const customMiddleWareQuery = (req, res, next) => {
  console.log("_____customMiddleWareQuery______ : ", req.query.age);
  if (!req.query.age || req.query.age < 18) {
    res.send("<h1>You are not allowed</h1>");
  }
  next();
};
// middleware -2
const customMiddlewareURL = (req, res, next) => {
  console.log("___customMiddlewareURL______: ", req.url);
  next();
};

// route modular
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("<h1>hello, home page</h1>");
});

// pass multiple middleware.
app.get("/login", customMiddleWareQuery, customMiddlewareURL, (req, res) => {
  res.send("<h1>Hello, Login </h1>");
});

app.get("/products", (req, res) => {
  res.send("<h1>Products page</h1>");
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
