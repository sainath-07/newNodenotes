import express from "express";

const app = express();

// SET EJS as template engine
// Automatically finds ejs file from view folder.
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

// define dynmaic route
app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.render("index", { title: `User name is ${username}` });
});


app.listen(3000, () => {
  console.log(`Server running on PORT:3000`);
});
