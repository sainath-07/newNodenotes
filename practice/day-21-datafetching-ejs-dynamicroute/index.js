import express from "express";
import fetch from "node-fetch";

const app = express();
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let output = await response.json();
    res.render("user", { output });
  } catch (error) {
    console.error("Error message: ", error.message);
  }
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
