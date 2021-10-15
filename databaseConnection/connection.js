const mysql = require('mysql')
require('dotenv').config()
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bharti@1234',
    database: process.env.DATABASE

});
con.connect((err) => {
    if(err) throw err;
    console.log('Database connected')
    sql = 'create table if not exists user_details (user_name varchar(255), email varchar(255) primary key,password varchar(255))'
    con.query(sql, (err) => {
        if(err) throw err;
        console.log('user_details table has created')
    });
    sql_post ='create table if not exists all_posts(id int primary key auto_increment,user_email varchar(255),posts varchar(255),Likes int, Deslikes int)'
    con.query(sql_post, (err) => {
        if(err) throw err;
        console.log('all_posts table has created')
    });
});

module.exports = con;