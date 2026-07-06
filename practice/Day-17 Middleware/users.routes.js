// used for route middleware.

import express from "express";

const app = express.Router();

app.use((req, res, next) => {
  console.log("__users.route.js__: middleware function");
  next();
});

// by default when we enter users as endpoint we will get below hoome page , if we enter users/profile we will get profile page.
// To access every route of users we need to enter user/...

app.get("/", (req, res) => {
  res.send("<h1>Hello, users</h1>");
});

app.get("/profile", () => {
  res.send("<h1>Profile page</h1>");
});

export default app;
