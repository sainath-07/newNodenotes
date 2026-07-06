import express from "express";
import dotenv from "dotenv";

const app = express();

// loads all env variables
dotenv.config()
const PORT = process.env.PORT
const APP_NAME = process.env.APP_NAME
const SECRET_KEY = process.env.SECRET_KEY


app.get("/",(req,res)=>{

    res.send(
        `<h1>Welcome to Home page
        </h1>
        <p> port : ${PORT}</p>
        <p> appname : ${APP_NAME}</p>
        <p> secretkey : ${SECRET_KEY}</p>
        `)

})


app.listen(3000, () => {
  console.log("Server is running on port:3000");
});
