const connection = require('../databaseConnection/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.log_in = (req, res) => {
    connection.query('select * from user_details', (err, data) => {
        if(err) throw err;
        let i = 0
        while(i<data.length-1) {
            if(data[i]['email'] ==req.body.email && data[i]['password'] == req.body.password) {
                break;
            }i++

        }if(data[i]['email'] == req.body.email && data[i]['password'] == req.body.password) {
            let d_token = {
                user_name:req.body.user_name,
                email:req.body.email
            }
            const token = jwt.sign(d_token, process.env.SECRET_KEY )
            console.log('User verified')
            res.send(token)

        }else{
            console.log('invalid email/password')
            res.send('invalid email/password')
        };
    });
};


