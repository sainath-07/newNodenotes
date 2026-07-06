import express from "express";

const app = express();
app.use(express.json());

// Here when we visit home page we will get form with input fields
//  reason it show form fields is express.static method will render static files, so here first static method is used so it will render static code in UI , so now no other response will be sent even though we have homepage route just below epxress.static method
// but if we place static method below the home page route, then it will send home page as data but  not form fields

app.use(express.urlencoded({ extended: true }));  // to get form fields data like username , password
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// req.body will available only when we use express.json() method, which will allows us to access user sent request body
app.post("/api/users", (req, res) => {
  const payload = req.body;
  console.log("____payload______", payload);
  res.status(200).json({
    message: "Created user",
    data: payload,
  });
});

app.post("/submit", (req, res) => {
  res.send("<h1> submit page </h1>");
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});
