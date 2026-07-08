import AppError from "../utils/AppError.js";
import express from "express";
import validate from "../utils/validate.js";
import User from "../model/user.model.js";
import authenticate from "../middleware/authenticate.js";
import dotenv from "dotenv";
dotenv.config();

const userRoute = express.Router();

const SECRET_KEY = process.env.SECRET_KEY;

// routes
userRoute.get("/", (req, res) => {
  return res.status(200).json({
    message: "Home page",
  });
});

userRoute.post("/add-user", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // validate
    validate(req.body);

    // find user
    const user = await User.findOne({ email });
    console.log({ user });

    if (user) {
      throw new AppError("Email already exists", 401);
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 12);

    await User.create({
      email,
      name,
      password: hashPassword,
    });

    return res.status(200).json({
      success: true,
      message: "Created user successfully",
    });
  } catch (error) {
    next(error);
  }
});

userRoute.post("/login-user", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    validate(req.body);

    // check user exists or not
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError("User doesnot exists", 401);
    }

    // generate token and send in response
    const token = await jwt.sign({ id: user._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    if (!isValidPassword) {
      throw new AppError("Invalid password", 401);
    }

    return res
      .status(200)
      .json({ success: true, token, message: "Logged in successfully" });
  } catch (error) {
    next(error);
  }
});

userRoute.get("/profile", authenticate, async (req, res) => {
  const users = await User.find();

  if (users.length == 0) {
    return res.status(200).json({
      success: true,
      message: "Welcome to Profile page, No user found",
      data: users,
    });
  }
  return res.status(200).json({
    success: true,
    message: "Welcome to Profile page",
    data: users,
  });
});

export default userRoute;
