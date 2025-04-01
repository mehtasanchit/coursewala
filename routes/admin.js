const Router = require("express");
const {adminModel}=require("../db");

const adminrouter = Router();

adminrouter.post("signup",function(req,res){

});

adminrouter.post("signin",function(req,res){

});


adminrouter.post("/createcourse",function(req,res){

});

adminrouter.post("/deletecourse",function(req,res){

});

adminrouter.post("/addcontent",function(req,res){

});

module.exports = {
    adminrouter:adminrouter
}

