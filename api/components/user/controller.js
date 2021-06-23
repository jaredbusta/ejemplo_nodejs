// tiene acceso a la parte de datos
const store = require('../../store/dummy');
const TABLA='user';

function list(){
    return store.list(TABLA);
}
function get(){
    return store.get(TABLA,1);
}
function upsert(data){
    var lastItem = store.getLastId(TABLA) +1;
    var data = { id:lastItem, name:'Sarahi=>' + lastItem };
    return store.upsert(TABLA,data)
}

function remove(){
    store.remove(TABLA)
}


module.exports={
    list,
    get,
    upsert
}