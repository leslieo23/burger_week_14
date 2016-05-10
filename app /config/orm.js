
var connection = require('./connection.js');
var Sequelize=require('sequelize');


var tableName = "burgers_db";

var orm = {


	allburgers: function(callback){
		var s = 'SELECT * FROM ' + burgers_db;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	
	searchCharacter: function(name, callback){
		var s = 'select * from ' + burgers_db + ' where routeName=?';

		connection.query(s,[name], function(err, result) {
	 
            callback(result);
        });

	},

	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	addCharacter: function(character, callback){

		// Creating a routeName so its easy to search. 
		var routeName = burgers_db.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + tableName + " (id,burger_name , devoured, date) VALUES (?,?,?,?,?)";

		connection.query(s,[routeName, burgers.id, burgers.burger_name, burgers.devoured, burgers.date], function(err, result) {
            
            callback(result);

        });

	}


};

module.exports = orm;