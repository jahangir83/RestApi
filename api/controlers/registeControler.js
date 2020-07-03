
const bcrep = require('bcryptjs')
const jwt = require('jsonwebtoken')
const registerModel = require('../model/resgitsterModel')

const registControle = (req, res,next) => {
    bcrep.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            res.json({
                erroe: err 
            })
        }

        let users = new registerModel({
            email: req.body.email,
            password: hash
        })

        users.save()
        .then(result => {
            res.status(201).json({
                massage: "Jahangir Your Register Create successful",
                users:result
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
    })

}

// log in 
const loginControler = (req, res, next) =>{
    let email = req.body.email
    let password = req.body.password

    registerModel.findOne({email})
    .then(users => {
        if(users){
            bcrep.compare(password, users.password, (err, resss) => {
                if(err) {
                    res.json({
                        massage:"jahangir ModelfindOne error"
                    })
                }
                if(resss) {

                    let token = jwt.sign({email: users.email, _id: users._id}, 'SECRET',
                    {expiresIn: '2h'})
                    res.json({
                        massage:"Log in success ",
                        token
                    })
                }else{
                    res.json({
                        massage:" Login filed password"
                    })
                }
            })
        }else{
            res.json({
                massage:"User not found"
            })
        }
    })
}

const getAllUser = (req, res, next) => {
    registerModel.find()
    .then(userss => {
        res.json({

            users:userss
        })
    })
    .catch(err => {
        res.json({
            err
        })
    })
}

module.exports = {
    registControle, 
     loginControler,
    getAllUser
  
}