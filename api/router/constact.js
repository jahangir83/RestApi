const express = require('express')
const router = express.Router()
const authonticate = require('../middlewer/middlewerUser')

//controler inport
const controler = require('../controlers/contactControler')

//Post 

router.post('/',authonticate, controler.postnewContactControl)

// Get
router.get('/', authonticate, controler.getAllContactControler)


//url params

router.get('/:id', authonticate, controler.singleDataFind)
router.post('/:id', (req, res, next) => {
    res.json({
        massage: 'i am a post route'
    })
})
router.put('/:id', authonticate, controler.updateData)
router.delete('/:id', controler.deleteContact)


module.exports =  router