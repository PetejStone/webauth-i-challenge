const bcrypt = require('bcryptjs')

const Users = require('../users/userRouter-model.js')

module.exports = function restricted(req, res, next) {
    //const {username, password} = req.headers;
    const {username, password} = req.body;

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({message: 'You shall not pass'})
    }

}