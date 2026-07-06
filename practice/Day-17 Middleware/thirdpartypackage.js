import express from "express";
import morgan from "morgan";
import cors from "cors"
import rateLimit from "express-rate-limit"

const app = express();

app.use(morgan("tiny"))
app.use(cors())

const limiter= rateLimit({
    windowMs :15*60*1000, //15 minutes
    max:5, // we can access api only 5 times
    message: "Too many requests from this IP, please try again after some time.",
    standardHeaders : true,
    legacyHeaders:true
})


app.use("/",limiter) //apply rate limiting to all request 


app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(3000, () => {
  console.log(`Server is running on PORT: 3000`);
});
