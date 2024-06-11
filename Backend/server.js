import connectToMongo from "./DB/connectDB.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import AuthUser from "./Router/Authuser.js"

const app = express();

 

app.get("/Auth", AuthUser);


app.listen(process.env.PORT, () => {
    connectToMongo();
    console.log("server listening on",process.env.PORT );
})