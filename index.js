require('dotenv').config();
const express = require("express");
const{userModel, adminModel, courseModel, purchaseModel} = require("./db");
const mongoose=require("mongoose");

const app=express();
app.use(express.json());

const {userrouter} = require("./routes/user");
const {courserouter} = require("./routes/course");
const {adminrouter} = require("./routes/admin");

app.use("/user",userrouter);
app.use("course",courserouter);
app.use("/admin",adminrouter);




async function connectdb() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DATABASE CONNECTED");
    app.listen(3000);
    console.log("listening on port 3000");
}
connectdb();
