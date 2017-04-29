// Import MySQL connection.
var connection = require("../config/connection.js");

//orm object connects to the mysql database to get the data and send
// data back in order to render the page
var orm = {
	selectAll: function (input, cb) {
		console.log("we made it to orm selectAll");
		var queryString = "SELECT * FROM " + input + ";";
		connection.query(queryString, function(err, results) {
			if (err) {
				throw err;
			}
			console.log("orm results: ");
			console.log(results);
			console.log("orm end results");
			cb(results);
		});
	},

	insertOne: function (table, val, cb) {
		console.log("we made it to orm insertOne");
		var queryString = "INSERT INTO " + table + " (burger_name) VALUES (?)"
		connection.query(queryString, val, function(err, results) {
			if (err) {
				throw err;
			}
			console.log(results);
			cb(results);
		});
	},

	updateOne: function (table, val, colId, cb) {
		console.log("we made it to updateOne orm");
		var queryString = "UPDATE " + table + " SET devoured = "+ val + " WHERE " + colId;
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			console.log(res);
			cb(res);
		}); 
	}
}

// Export the orm object for the model (burger.js).
module.exports = orm;
