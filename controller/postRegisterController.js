const con = require('../databaseConnection/connection')
module.exports.register = (req,res) =>{
        let data = {
            user_name:req.body.user_name,
            email:req.body.email,
            password: req.body.password
        }
        con.query('insert into user_details set?', data, function(err, result){
            if(err) throw err;
            console.log('user signup successfully')
            res.send('user signup successfully')
        });
};

