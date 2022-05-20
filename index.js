const express = require('express')
//const myconn = require('express-myconnection')

const app = express()
const port = process.env.PORT || 4000




//routes
app.get('/', (req, res) => {
    res.send('welcome to my api gaturro')
})

//server running
app.listen(port)
console.log('listen')