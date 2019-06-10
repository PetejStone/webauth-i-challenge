const express = require('express')
const Users = require('./userRouter-model.js')
const router = express.Router();

const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req,res,next) => {
    Users.find()
    .then(users => {
        res.json({users})
    })
    .catch(err => res.json({err}))
})


module.exports = router