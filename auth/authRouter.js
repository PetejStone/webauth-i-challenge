const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs'); //bcrypt is a plugin that hashes or encrypts data

const Users = require('../users/userRouter-model.js')

router.post('/register', (req, res) => {
    let user = req.body //setting user = to the object content passed in by user
     
    // sets hash = to a fn where the first argument is the password key from req.body
    // and the second argument is how many times you want to hash it... it is always multiplied by 2 ^ (x) power, in this case, 8
    const hash = bcrypt.hashSync(user.password, 8)

    user.password = hash; // sets the password key equal to the new hashed password

    Users.add(user)
    .then(newUser => {
        res.status(201).json({newUser})
    })
    .catch(err => {
        res.status(500).json({err})
    })

})

module.exports = router;

