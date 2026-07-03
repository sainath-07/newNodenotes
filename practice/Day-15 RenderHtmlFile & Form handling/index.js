const express = require("express");
const path = require("path");
const { submit } = require("./submit.js");
const app = express();

app.get("/", (req, res) => {
  const rootPath = path.resolve();
  const file = rootPath + "/index.html";
  res.sendFile(file);
});

app.post("/submit", (req, res) => {
  res.send(submit());
});

app.listen(3000, () => {
  console.log(`SERVER RUNNING ON 3000`);
});
