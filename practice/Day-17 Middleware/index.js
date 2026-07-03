import express from "express";
import path from "path";

const app = express();

//Application level middleware
// if no next method is called, your browser or frondend will be in progress but never receives any resposne in frontend.

app.use((req, res, next) => {
  console.log(`APPLICATION ROUTE: ${req.method}`);
  next();
});

app.get("/", (req, res) => {
  //   console.log("Get method , Welcomes you....");
  res.send("Get method , Welcomes you....");
});

// route level middleware:
app.use("/users", (req, res, next) => {
  console.log(`Route level middleware`);
//   res.send(`Route level middleware`);
  next()
});

app.get("/users/user1", (req, res) => {
  console.log("users/user1 ---> middleware");
  res.send(`users/user1 ---> middleware`);
});

// run server.
app.listen(3000, () => {
  console.log(`Server is running  on PORT : 3000`);
});
