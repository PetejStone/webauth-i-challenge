const db = require('../data/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('users').select('id','username', 'password')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users').where({id: id}).first()
}

function add(user) {
    return db('users').insert(user, 'id')
    // .then(ids => {
    //     const [id] = ids
    //     return findById(id)
    // })
}