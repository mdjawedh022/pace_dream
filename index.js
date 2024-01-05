const express=require("express");
const {connection} =require("./utils/db");
const cors=require('cors');
const { log } = require("console");
const { hotelRouter } = require("./routes/hotel.routes");
require("dotenv").config();

const app=express();

app.get('/',(req,res)=>{
    res.send("welecom to paceDream Hotel backend api!");

});

app.use(cors());
app.use(express.json());

app.use("/api/hotel", hotelRouter);

app.listen(process.env.port,async()=>{
    try{
   await connection
   console.log("connected to the database")
    }catch(err){
        console.log("Database connection failed")
    }
    console.log(`server is running at the port ${process.env.port}`)
})