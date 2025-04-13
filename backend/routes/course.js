const Router = require("express");
const { adminrouter } = require("./admin"); 
const {userMiddleware}=require("../middleware/user");
const {purchaseModel, courseModel}=require("../db");

const courserouter = Router();

courserouter.get("/preview",async function(req,res){
    const courses = await courseModel.find({});
    res.json({
        courses
    })
});

courserouter.post("/purchase",userMiddleware,async function(req,res){
    const userId=req.userId;
    const courseId=req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"PURCHASE SUCCESFUL"
    }) 

});


module.exports = {
    courserouter:courserouter
}