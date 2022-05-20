const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const app = express()
app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: 'replay'
}

//middleware
//app.use(myconn(mysql, dbOptions, 'single'))

//routes
app.get('/', (req, res) => {
    res.send('welcome to my api gatoooi')
})

//server running
app.listen(app.get('port'), () => {
    console.log('listen on port:' , app.get('port'))
})