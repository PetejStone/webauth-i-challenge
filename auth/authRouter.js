const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs'); //bcrypt is a plugin that hashes or encrypts data
const restricted = require('../auth/restricted.js');
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

 router.post('/login', restricted, (req, res) => {
    
     let {username, password} = req.body;

     Users.findBy({username}) 
     .first()
     .then(user => {
         res.status(200).json({message: `You have successfully logged in, your id is ${user.id}`})
     })
     .catch(err => {
         res.status(500).json({err})
     })
 })

// router.post('/login', (req, res) => {
//     let { username, password } = req.body;
  
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           res.status(200).json({ message: `Welcome ${user.username}!` });
//         } else {
//           res.status(401).json({ message: 'Invalid Credentials' });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });

module.exports = router;

