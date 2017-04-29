// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//burger object contains three function that communicate with the ORM file
//to send and recieve data
var burger = {

	selectAll: function(cb) {
		console.log("we made it to burger.js");
    	orm.selectAll("burgers", function(res) {
	      cb(res);
	    });
	  },

	insertOne: function(val, cb) {
		console.log("we made it to burger.js");
		orm.insertOne("burgers", val, function(res) {
			cb(res);	
	});
	},

	updateOne: function(val, colId, cb) {
		console.log("we made it to updateOne burger.js");
		orm.updateOne("burgers", val, colId, function(res) {
			cb(res);
		});
	}
}

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;