// create model 
const validator = require('validator') // input value check wich valit data
const mongoos = require('mongoose')
const Schema = mongoos.Schema


const contactSchema = new Schema({ // create Schema
    name:{
        type: String,
        trim: true, // space cound work
        required: true, // must name provite
        minlength: 3 // lenght moust
    },
    phone:{
        type: String,
        trim:true,
        required:true,
        unique:true  // phone number one use 
    },
    email:{
        type:String,
        trim: true,
        validate:{
            validator: (v) => {
              return validator.isEmail(v) // valit function 
            },
            message: `{VALUE} is not an email`
        }
    }
})

// Crate Model Schema
const contact = mongoos.model('Contact', contactSchema)

// Ecport model

module.exports = contact 