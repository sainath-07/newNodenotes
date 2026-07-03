// const express = require("express");
// const path =path()

import express from "express";
import path from "path";

const app = express();

// serve static files (images, css, js) from public folder
app.use(express.static("public"));


// default home page.
app.get("/", (req, res) => {
  res.send("Hello, Welcome to express tutorials");
});

// endpoint API as home
app.get("/home", (req, res) => {
  res.send("HOME PAGE");
});

// for passing html tag , make sure  to use them in string
app.get("/htmltags", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// query params
app.get("/queryparams", (req, res) => {
  const { name } = req.query;
  console.log({ name });
  res.send(`Search Query Params Page. Query Param name: ${name}`);
});

// route params
app.get("/routeparams/:id", (req, res) => {
  const { id } = req.params;
  // we get full request data in string format, we need to convert to interger for number value
  console.log({ routeparams: id });
  res.send(`Route Params Page, Route Params is: ${id}`);
});

// html and  external  css file
app.get("/externalcssfile", (req, res) => {
  const filepath = path.resolve() + "/index.html";
  res.sendFile(filepath);
});

// 404 custom error message
// we need to use USE method for custom error handling.
app.use((req, res) => {
  res.send(`404 PAGE NOT FOUND....`);
});

// server running.
app.listen(3000, () => {
  console.log(`BACKEND SERVER IS RUNNING ON 3000`);
});
