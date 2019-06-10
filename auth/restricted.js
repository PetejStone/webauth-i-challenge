const bcrypt = require('bcryptjs')

const Users = require('../users/userRouter-model.js')

module.exports = function restricted(req, res, next) {
    const {username, password} = req.headers;

    if (username && password) {
        Users.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({message: 'Invalid password'})
            }
        })
        .catch( err => {
            res.status(500).json({message: err})
        })
    } else {
        res.status(401).json({message: 'please provide a username or password'})
    }

}