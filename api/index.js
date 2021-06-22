// servidor
const express = require('express');
// crear archivo de configuracion en raiz
const config = require("../config.js");

const user = require("./components/user/network");
// instalar expres... npm i express en la terminal 
const app = express();

//definir rutas
app.use("/api/user",user); // todo lo que venga de api/user, envia a user 

//puerto de escucha y callback para verificar el estado del puerto
app.listen(config.api.port,()=>{
    console.log("Api escuchando en el puerto " + config.api.port);
});

// para comprobar el estado del servidor ejecuta
// nodemo api/index.js en la terminal