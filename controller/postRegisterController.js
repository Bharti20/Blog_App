const con = require('../databaseConnection/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.register = (req,res) =>{
        let data = {
            user_name:req.body.user_name,
            email:req.body.email,
            password: req.body.password
        }
        let d_token = {
            user_name:req.body.user_name,
            email:req.body.email
        }
        const token = jwt.sign(d_token, process.env.SECRET_KEY )
        console.log(token)
        con.query('insert into user_details set?', data, function(err, result){
            if(err) throw err;
            console.log('data has inserted')
            res.send(token)
        });
};

