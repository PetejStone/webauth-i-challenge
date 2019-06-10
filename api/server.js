const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/', (req, res, next) => {
    res.send(`<h1>Server is Running!</h1>`)
})

module.exports = server;