const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const userRouter = require('../users/usersRouter.js')
const authRouter = require('../auth/authRouter.js')
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/', (req, res, next) => {
    res.send(`<h1>Server is Running!</h1>`)
})

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)

module.exports = server;