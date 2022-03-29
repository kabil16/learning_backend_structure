const express = require('express');
const connectDB = require("./config/db");

const app = express();
const port = 5000;

connectDB();

app.get("/",(req,res)=>{
    res.send("hello peteR");
})

app.listen(port,()=>{
    console.log("server has been started");
})