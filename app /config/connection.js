var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "",
        database: "burgers_db"
    },
    localhost:{
        port:3306
        host:'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
        user:'ub4hi40jr9re3fwb'
        password:'ov1j5fuuyueaykw3'
    }
}
var connection = mysql.createConnection();


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;