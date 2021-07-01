// tiene acceso a la parte de datos
const store = require('../../store/dummy');
const nanoid =require('nanoid');
const TABLA='user';


module.exports = function (injectedStore) { 
    let store = injectedStore;
    if(!store){
        store = require('../../store/dummy');
    }
    function list(){
        return store.list(TABLA);
    }
    function get(id){
        return store.get(TABLA,id);
    }
    function upsert(data){
        // var lastItem = store.getLastId(TABLA) +1;
        // var data = { id:lastItem, name:'Sarahi=>' + lastItem };
        // return store.upsert(TABLA,data)

        const user ={
            name: data.name
        }
        if(data.id){
            user.id =data.id;
        }else{
            user.id= nanoid();
        }
        return store.upsert(TABLA,user);
    }
    
    function remove(){
        store.remove(TABLA)
    }

    return {
        list,
        get,
        upsert,
        remove
    }
}
