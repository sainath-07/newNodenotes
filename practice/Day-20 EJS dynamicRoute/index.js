import express from "express";

const app = express();
app.set("view engine", "ejs");

// dummy data
const users = [
  { name: "Rohith", id: 1, role: "admin" },
  { name: "Sainath", id: 2, role: "admin" },
  { name: "Venu", id: 3, role: "admin" },
];

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Dynamic route
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((item) => item.id === parseInt(id));

  if (user) {
    res.render("user", {user});
  } else {
    res.status(404).send("user not found");
  }
});

app.listen(3000, () => {
  console.log(`SERVER RUNNING ON PORT:3000`);
});
