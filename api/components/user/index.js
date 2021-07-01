//
//
//  AQUI SE EXPORTA LA EXPORTACION DE LOS CONTROLADORES
//
//
const store = require('../../store/dummy');
const controller = require("./controller");

module.exports = controller(store);