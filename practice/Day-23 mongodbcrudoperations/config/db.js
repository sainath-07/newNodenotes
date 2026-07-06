import { MongoClient } from "mongodb";

const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

let database;

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Mongodb connection");
    database = client.db("practice1");
  } catch (error) {
    console.error("Erorr: ", error.message);
    process.exit();
  }
};

export const getDB = () => database;
