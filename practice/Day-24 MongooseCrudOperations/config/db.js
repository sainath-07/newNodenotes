import mongoose from "mongoose";

// Add your MongoDB URL here
// Mongodburl/databasename
const MONGO_URL = "mongodb://localhost:27017/practice1";

const connectDB = async () => {
    try {

        await mongoose.connect(MONGO_URL);
        console.log("MongoDB Connected");

    } catch (error) {

        console.log(error.message);

        process.exit(1);

    }
};

export default connectDB;