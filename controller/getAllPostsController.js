const connection = require('../databaseConnection/connection')

module.exports.allPosts = (req, res) => {
    connection.query('select * from posts_details', (err, allData) => {
        if(err) throw err;
        console.log(allData)
        res.send(allData)
    });
};
