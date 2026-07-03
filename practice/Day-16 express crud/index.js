import express from "express";
import path from "path";

const app = express();

// auto parse json body
app.use(express.json());

let users = [
  { id: 1, name: "sainath" },
  { id: 2, name: "venu kumar" },
  { id: 3, name: "veda" },
];

// home route
app.get("/users", (req, res) => {
  res.send(users);
});

// post new users.
app.post("/addUsers", (req, res) => {
  const payload = { ...req.body };
  users = [...users, payload];
  
  res.status(201).json({
    message: "Added new user",
    username: payload.name,
  });
});

// put method

app.put("/replaceUser/:id", (req, res) => {
  const payload = { ...req.body };

  const { id } = req.params;
  const userId = parseInt(id);

  const userIndex = users.findIndex((item) => item.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "No user found" });
  }

  users[userIndex] = { id: userIndex, ...req.body };
  res.status(200).json({ message: "Replace user successfully" });
});

// patch method

app.patch("/updateUser/:id", (req, res) => {
  const payload = { ...req.body };

  const { id } = req.params;
  const userId = parseInt(id);

  const userIndex = users.findIndex((item) => item.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "No user found" });
  }

  users[userIndex] = { ...payload, ...req.body };
  res.status(200).json({ message: "Updated user successfully" });
});

// delete method
app.delete("/deleteUser/:id", (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id);

  const userIndex = users.findIndex((item) => item.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "No user found" });
  }

  users.splice(userIndex, 1);
  res.send(`Deleted user: ${userdata.name}`);
});

// Run Server on 3000
app.listen(3000, () => {
  console.log(`Server running on 3000 port`);
});
