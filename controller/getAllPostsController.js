const connection = require('../databaseConnection/connection')

module.exports.allPosts = (req, res) => {
    connection.query('select id, user_email, posts from all_posts', (err, allData) => {
        if(err) throw err;
        console.log(allData)
        res.send(allData)
    });
};
