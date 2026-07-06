import express from "express"
import {MongoClient} from "mongodb"

const app = express()

// mongodb connection
const url ="mongodb://localhost:27017";
const dbname ="practice1"

// middleware to parse json
app.use(express.json())

// creating a new mongoClient
const client = new MongoClient(url)

app.get("/",async(req,res)=>{

    try {
        // connect to mongodb
        await client.connect()
        console.log("DB connected successfully")

        const db = client.db(dbname)
        const collection = db.collection("studentdb")

        const data = await collection.find().toArray()
        res.status(200).json({data})

    } catch (error) {
        console.error("ERROR: ",error)
    }

})

app.listen(3000,()=>{
    console.log("SERVER is running on port:3000")
})