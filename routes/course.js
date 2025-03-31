const Router = require("express");
const { adminrouter } = require("./admin");

const courserouter = Router();

courserouter.get("/preview",function(req,res){

});

courserouter.post("/purchase",function(req,res){

});


module.exports = {
    courserouter:courserouter
}