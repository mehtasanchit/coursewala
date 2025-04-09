const Router = require("express");
const bcrypt= require("bcrypt");
const {z}= require("zod");
const userrouter= Router();
const { userModel, purchaseModel, courseModel}=require("../db");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD}=require("../config");
const { userMiddleware } = require("../middleware/user");

userrouter.post("/signup",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;

    //zod validation
    const requirebody = z.object({
        email:z.string().min(3).max(100).email(),
        password:z.string().min(3).max(30),
        firstName:z.string().min(3).max(100),
        lastName:z.string().min(3).max(100)
    })

    const safeparsesucees = requirebody.safeParse(req.body);
    if(!safeparsesucees){
        res.json({
            message:"INVALID CREDENTIALS",
            error:safeparsesucees.error.errors
        })
        return;
    }

    let error=false;
    try{
        //hasing of passwords
        const hashpasswords = await bcrypt.hash(password,10);
        await userModel.create({
            email:email,
            password:hashpasswords,
            firstName:firstName,
            lastName:lastName
        });
    }catch(e){
        res.json({
            message:"user already exist"
        })
        error=true;
    }
    if(!error){
        res.json({
            message:"YOU ARE SIGNED UP"
        })
    }

});

userrouter.post("/signin",async function(req,res){
    const { email , password} = req.body;
    const user = await userModel.findOne({
        email:email
    });
    const passwordmatch = await bcrypt.compare(password,user.password);

    if(user && passwordmatch){
        const token=jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);

        res.json({
            token:token
        })
    }
    else{
        res.status(403).json({
            message:"INVALID CREDENTIALS"
        });
    }

});

userrouter.get("/purchases",userMiddleware,async function(req,res){
    //add function in future to check money is paid or not
    const userId=req.userId;
    const purchases= await purchaseModel.find({
        userId
    })
    const courseData= await courseModel.find({
        _id:{$in:purchases.map(x=>x.courseId)} //convert array of objs to array of strings having courseids
    })
    res.json({
        purchases,
        courseData
    })
});

module.exports = {
    userrouter: userrouter
}