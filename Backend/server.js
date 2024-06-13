import connectToMongo from "./DB/connectDB.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import AuthUser from "./Router/Authuser.js"
import bodyParser from "body-parser";
import cors from 'cors'
import Data from "./Router/Data.js"
const app = express();


 
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors ());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/Auth", AuthUser);
app.use("/Data", Data);


app.listen(process.env.PORT, () => {
    connectToMongo();
    console.log("server listening on",process.env.PORT );
})