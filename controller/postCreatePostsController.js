const connection = require('../databaseConnection/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.create_posts = (req, res) => {
    let token = req.headers.authorization
    jwt.verify(token, process.env.SECRET_KEY, (err, verifiedJwt) => {
        if(err) {
            res.send(err)
        }else{
            console.log(verifiedJwt)
            let userEmail = verifiedJwt['email']
            let post_data = {
                id: req.body.id,
                user_email:userEmail,
                posts: req.body.posts
            }
            connection.query('INSERT INTO posts_details set?',post_data ,(err, result) => {
                if(err) throw err;
                console.log('post created')
                res.send('post created')
            });
        };
    });
};
