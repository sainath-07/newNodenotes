import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError("Invalid token", 401);
    }

    const data = await jwt.verify(token, SECRET_KEY);

    if (!data) {
      throw new AppError("Invalid token", 401);
    }

    req.userId = data.id;
    next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;
