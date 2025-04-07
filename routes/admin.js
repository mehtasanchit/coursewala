const Router = require("express");
const {adminModel, courseModel}=require("../db");
const bcrypt= require("bcrypt");
const {z}= require("zod");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const adminrouter = Router();

adminrouter.post("/signup",async function(req,res){
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
            await adminModel.create({
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

adminrouter.post("/signin",async function(req,res){
        const { email , password} = req.body;
        const admin = await adminModel.findOne({
            email:email
        });
        const passwordmatch = await bcrypt.compare(password,admin.password);
    
        if(admin && passwordmatch){
            const token=jwt.sign({
                id:admin._id
            },JWT_ADMIN_PASSWORD);
    
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


adminrouter.post("/course", adminMiddleware ,async function(req,res){
    const adminId= req.userId;
    const {title,description,imageurl,price}=req.body;
    const course=await courseModel.create({
        title:title,
        description:imageurl,
        price:price,
        creatorId:adminId
    })
    res.json({
        message:"Course Created",
        courseId:course._id
    });
});

adminrouter.put("/course",adminMiddleware,async function(req,res){
    

});

adminrouter.post("/addcontent",function(req,res){
    const adminId= req.userId;
    const {title,description,imageurl,price}=req.body;
});

module.exports = {
    adminrouter:adminrouter
}

