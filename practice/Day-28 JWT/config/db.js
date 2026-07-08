import mongoose from "mongoose";

const connectDB = () => {
  try {
    // db connection
    mongoose.connect("mongodb://localhost:27017/practice1");
    console.log("Db connected successfully........");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
