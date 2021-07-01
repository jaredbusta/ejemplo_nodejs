const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router(); // usa el router express 

function list(req,res){
    Controller.list().then((lista)=>{
        response.success(req,res,lista,200);// regresa lista de usuarios 
    } ).catch((err)=>{
        response.error(req, res,err.message,500);
    }); 
}
function get(req,res){
    Controller.get(req.params.id).then((user)=>{
        response.success(req,res,user,200);// regresa lista de usuarios
    }).catch((err)=>{
        response.error(req, res,err.message,500);
    });
}
function upsert(req, res){
    Controller.upsert(req.data).then((user)=>{
        response.success(req,res,user,201);
    }).catch((err)=>{
        response.error(req,res,err.message,500);
    });
}

router.get('/',list);
router.get('/:id',get);
router.post('/',upsert);
router.put('/',upsert);

module.exports= router; // exporta el objeto router