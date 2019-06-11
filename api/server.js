const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const userRouter = require('../users/usersRouter.js')
const authRouter = require('../auth/authRouter.js')
const server = express()

const sessionConfig = {
    name: 'Leedle',
    secret: 'Leedle Lee',
    cookie: {
        maxAge: 1000 * 60,
        secure: false, /// only during development,
        httpOnly: true,
    },
    resave: false,
    saveUnitialized: false// GDPR laws forbid-- must check with user to run cookies 
}

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(session(sessionConfig))

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)



server.get('/', (req, res, next) => {
    res.send(`<h1>Server is Running!</h1>`)
})

module.exports = server;