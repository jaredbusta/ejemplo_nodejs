const db = {
    'user':[
        { id:'1', name:'Jared' },
        { id:'2', name:'Rodolfo' },
        { id:'3', name:'Enrique' },
        { id:'4', name:'Prisco' },
    ],

    'post':[
        {'id':1, 'id_user':1,'post':"Este es mi primer post"},
        {'id':2, 'id_user':2,'post':"Este es mi primer post"},
        {'id':3, 'id_user':1,'post':"Este es mi segundo post"},
        {'id':4, 'id_user':1,'post':"Este es mi tercer post"},
        {'id':5, 'id_user':4,'post':"Este es mi primero post"},
    ]

};

async function list(tabla){
    return db[tabla];
}
async function get(tabla, id){
    let collection = await list(tabla); 
    return collection.filter(item=>item.id=== id) || null;
}
async function upsert(tabla, data){
    db[tabla].push(data);
}
async function remove(tabla, id){
    // let collection = list(tabla);

    // return collection.slice(id);
}

async function getLastId(table){
    let data = list(table);
    const last_item = data[data.length - 1];
    return  last_item.id;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    getLastId
}