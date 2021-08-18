const mysql = require('mysql')
require('dotenv').config()
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE

});
con.connect((err) => {
    if(err) throw err;
    console.log('Database connected')
    sql = 'create table if not exists user_details (email varchar(255),password varchar(255), likes int, dislikes int)'
    con.query(sql, (err) => {
        if(err) throw err;
        console.log('Table has created')
    })
});

module.exports = con;