const express = require("express");

const response = require("../../../network/response");

const router = express.Router(); // usa el router express

router.get("/",function(req,res){
    response.success(req,res,"Todo correcto",200);
});

module.exports= router; // exporta el objeto router