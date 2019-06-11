
module.exports = function restricted(req, res, next) {
    const {Authorization} = req.headers;
   

    if (req.session && req.session.user || req.headers.authorization == '724&knKnmIdk&jfn%cnakwnfn%hrndnWLkfjIjak') {
        console.log('testing')
        next();
    } else {
        res.status(401).json({message: 'You shall not pass'})
    }

}