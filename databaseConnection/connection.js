const mysql = require('mysql')
require('dotenv').config()
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE

});