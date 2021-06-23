const express = require("express");

const response = require("../../../network/response");
const Controller = require("./controller");

const router = express.Router(); // usa el router express

router.get("/",function(req,res){
    Controller.upsert();
    const lista =Controller.list();


    response.success(req,res,lista,200);
});

module.exports= router; // exporta el objeto router