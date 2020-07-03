const express = require('express')
const contacRout = require('./api/router/constact')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/contactdb') // mongodb server connectio with htem mongoos expressJs code 

const db = mongoose.connection // connection  data server

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => { // server open connection signal
    console.log("Database Connection Established")
})



const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8389

// import router
const userRouter = require('./api/router/RestisterRouter')
app.use('/users', userRouter)


app.use('/contact', contacRout)

app.get('/',(req, res) => {
    res.send("<h1>Hello World My Name Is Jahangir alam</h1>")
})


app.listen(PORT, () => {
    console.log(`localhosr:${PORT}`);
    
})


