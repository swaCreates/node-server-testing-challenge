db = require('../data/db_config.js');

module.exports= {
    fetch,
    fetchById,
    create,
    destroy
};

function fetch(){
    return db('Characters');
};

function fetchById(id){
    return db('Characters')
        .where('id', id)
        .first();
};

function create(payload){
    return db('Characters')
        .insert(payload);
};

function destroy(id){
    return db('Characters')
        .where('id', id)
        .delete();
};