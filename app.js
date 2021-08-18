const con = require('./databaseConnection/connection')

const express = require('express')
const app = express()
app.use(express.json())
//require('dotenv').config()
const callingApis = require('./routes/index')

app.use('/', callingApis)


app.listen(8000, (err) => {
    if(err) throw err;
    console.log('server running........')
});