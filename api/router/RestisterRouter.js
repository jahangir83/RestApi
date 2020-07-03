
const express = require('express')
const router = express.Router()

const autincate = require('../middlewer/middlewerUser')

const registeContr = require('../controlers/registeControler')

router.post('/login', registeContr.loginControler)

router.post('/register', registeContr.registControle)

router.get('/', autincate, registeContr.getAllUser)

module.exports = router