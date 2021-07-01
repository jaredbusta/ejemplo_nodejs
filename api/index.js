// servidor
const express = require('express');
const bodyParse = require("body-parser")
const app = express();



const config = require("../config"); // crear archivo de configuracion en raiz

const user = require("./components/user/network");
// instalar expres... npm i express en la terminal 

app.use(bodyParse.json()); // instalar con npm i body-parser
//definir rutas
app.use("/api/user" , user ); // todo lo que venga de api/user, envia a user 

//puerto de escucha y callback para verificar el estado del puerto
app.listen(config.api.port,()=>{
    console.log("Api escuchando en el puerto " + config.api.port);
});

// para comprobar el estado del servidor ejecuta
// nodemon api/index.js en la terminal