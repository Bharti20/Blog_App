const connection = require('../databaseConnection/connection')

module.exports.allLikesDeslikes = (req, res) => {
    connection.query('select * from all_posts', (err, allData) => {
        if(err) throw err;
        console.log(allData)
        res.send(allData)
    });
};
