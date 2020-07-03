
const validator = require('validator') // input value check wich valit data
const mongoos = require('mongoose')
const Schema = mongoos.Schema


const RrsUsreSchema = new Schema({
    email:{
        type:String,
        trim: true,
        validate:{
            validator: (v) => {
                return validator.isEmail(v)
            },
            message:`{VALUE} is not email`
        }
    },
    password:{
        type:String
    }
})

const user = mongoos.model('User', RrsUsreSchema)
module.exports = user