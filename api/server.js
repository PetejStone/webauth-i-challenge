const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')

//stores cookie sessions to a seperate server that persists through server restarts
const KnexSessionStore = require('connect-session-knex')(session) 


const userRouter = require('../users/usersRouter.js')
const authRouter = require('../auth/authRouter.js')
const server = express()

const sessionConfig = {
    name: 'Leedle', //default is server ID.. changing it protects hackers from knowing what library you are using
    secret: 'Leedle Lee', //encrypt and decrtypt cookie
    cookie: {
        maxAge: 1000 * 60 * 10,// max time in seconds * 60 = one minute * 10 = ten minutes
        secure: false, /// false only during development, send cookie only over https
        httpOnly: true, //always true...only http can read.. not JS
    },
    resave: false, //if no changes, don't save
    saveUnitialized: true,// GDPR laws forbid-- must check with user to run cookies, FALSE in production
    store: new KnexSessionStore({ //must use new
        knex: require('../data/dbConfig.js'),// what file to connect to
        tablename: 'sessions', //creates a table of sessions
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
      }),
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