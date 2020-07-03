
const Model = require('../model/Mode')
const e = require('express')

//create controler 

// Control data manegment stucture
const getAllContactControler = (req, res, next) => {
Model.find()
.then(allcontacts => {
    res.status(201).json({
        massage:'Jahangir Your All Contact Data',
        allcontacts
    })
})
.catch(err => {
    console.log(err)
    res.status(500).json({
        massage:'Jahangir Your Code Erorr',
        error:err
    })
})
}

// New contact create function
const postnewContactControl = (req, res , next) => {
    const contact = new Model({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    
    // Save Method
    contact.save()
    .then(data => {
        res.status(201).json({
            massage:"Jahangir Your Data Save successfully",
            data
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            massage: " Jahangir your wrong Code",
            error: err
        })
    })
}
//Single data find 
const singleDataFind = (req, res, next) =>{
    let id = req.params.id
    Model.findById(id)
   .then(respo => {
        res.json({
            respo
        })
   })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            massage: " Jahangir your wrong Code",
            error: err
        })
    })
    console.log(id)
}
// delet data 
const deleteContact = (req, res , next) => {
    let id = req.params.id
    Model.findByIdAndRemove(id)
    .then(rejult => {
        res.json({
            massage: 'Jahangir Your Data Delete success',
            rejult
        })
    })
     .catch(err => {
        console.log(err)
        res.status(500).json({
            massage: " Jahangir your wrong Code",
            error: err
        })
    })
}
// update data
const updateData = (req, res, next) => {
    let id = req.params.id
    let newContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }
    Model.findByIdAndUpdate(id, newContact)
    .then(consta => {
        res.json({
            massage:"updated successfully",
            consta
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            massage: " Jahangir your wrong Code",
            error: err
        })
    })
}
// File Export Now
module.exports = {
    getAllContactControler,
    postnewContactControl,
    singleDataFind,
    deleteContact,
    updateData
}