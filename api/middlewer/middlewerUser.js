
const jtw = require('jsonwebtoken')


const authenticate = (req, res, next) => {
    try{
        
        const token = req.headers.authorization.split(' ')[1]
        const decode = jtw.verify(token, 'SECRET')

        req.user = decode
        next()

    }catch(errorr){
        res.json({
            massage:'you authentication fild'
        })
    }
}

module.exports = authenticate