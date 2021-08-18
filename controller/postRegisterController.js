const con = require('../databaseConnection/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.register = (req,res) =>{
        let data = {
            email:req.body.email,
            password: req.body.password
        }
        const token = jwt.sign(data, process.env.SECRET_KEY )
        console.log(token)
        con.query('insert into user_details set?', data, function(err, result){
            if(err) throw err;
            console.log('data has inserted')
            res.send(token)
        });
};

