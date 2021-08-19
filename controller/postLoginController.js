const connection = require('../databaseConnection/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.log_in = (req, res) => {
    connection.query('select * from user_details', (err, data) => {
        if(err) throw err;
        let email = req.body.email
        let password = req.body.password
        let token = req.headers.authorization
        let i = 0
        while(i<data.length-1) {
            if(data[i]['email'] == email && data[i]['password'] == password) {
                break;
            }i++

        }if(data[i]['email'] == email && data[i]['password'] == password) {
            jwt.verify(token, process.env.SECRET_KEY, (err, verifiedJwt) => {
                if(err) {
                    res.send(err)
                    console.log(err)
                }else{
                    res.send(verifiedJwt)
                    console.log('verified successfully')
                }
            });
        }else{
            console.log('invalid email/password')
            res.send('invalid email/password')
        };
    });
};


