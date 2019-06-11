const express = require('express')
const Users = require('./userRouter-model.js')
const router = express.Router();

const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//     res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//    res.status(200).json({messageOfTheDay: 'Hello World'})
    Users.find()
    .then(users => {
        res.json({users})
    })
    .catch(err => res.json({err}))
})


module.exports = router