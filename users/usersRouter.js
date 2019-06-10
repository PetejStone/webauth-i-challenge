const express = require('express')
const Users = require('./usersRouter-model.js')
const router = express.Router();

const restricted = require('../auth/restricted.js')



module.exports = router