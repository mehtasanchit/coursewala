const Router = require("express");

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

