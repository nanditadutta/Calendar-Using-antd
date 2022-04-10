var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pst'
});

con.connect(function(err){
    if (err) {
        throw err;
    }else {
        console.log('connected to the database');
    }
})

module.exports = con;
