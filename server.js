const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const app = express()
app.set('port', process.env.PORT || 9000)

//routes
app.get('/', (req, res) => {
    res.send('welcome to my api gatoooi')
})

//server running
app.listen(app.get('port'), () => {
    console.log('listen on port:' , app.get('port'))
})