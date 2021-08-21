const connection = require('../databaseConnection/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config();
module.exports.likes_deslikes = (req, res) => {
    let token = req.headers.authorization
    jwt.verify(token, process.env.SECRET_KEY, (err, verifiedJwt) => {
        if(err){
            res.send(err)
        }else {
            connection.query('select * from all_posts', (err, allData) => {
                if(err) throw err;
           
                if(req.body.Likes == "like") {
                    var i = 0
                    while(i<allData.length) {
                        if(allData[i]['id'] == req.body.id) {
                            connection.query('update all_posts set Likes =? where id =?',[allData[i]['Likes']+1 , req.body.id], (err) => {
                                console.log('One like added')
                                res.send('One like added')
                            });
                            break;
                        }i++
                    };
                    
                }else{
                    var i = 0
                    while(i<allData.length) {
                        if(allData[i]['id'] == req.body.id) {
                            connection.query('update all_posts set Deslikes =? where id =?',[allData[i]['Deslikes']+1, req.body.id], (err) => {
                                console.log('One Deslike added')
                                res.send(' One Deslike added')
                            });
                            break;
                        }i++
                    };
                }
            });
        };
    });

};