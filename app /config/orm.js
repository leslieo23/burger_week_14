
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

	
	searchBurger: function(name, callback){
		var s = 'select * from ' + burgers_db + ' where routeName=?';

		connection.query(s,[name], function(err, result) {
	 
            callback(result);
        });

	},


	addBurger: function(character, callback){

		var routeName = burgers_db.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + tableName + " (id,burger_name , devoured, date) VALUES (?,?,?,?,?)";

		connection.query(s,[routeName, burgers.id, burgers.burger_name, burgers.devoured, burgers.date], function(err, result) {
            
            callback(result);

        });

	}


};

module.exports = orm;