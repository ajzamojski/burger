var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//router object routes all the requests to send and retrieve data
router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("hbsObject results: ");
    console.log(hbsObject);
    // console.log(hbsObject.burgers[0].burger_name);
    res.render("index", hbsObject);
  });
});

router.post("/index", function(req, res) {
	burger.insertOne(req.body.name, function(data) {
		res.redirect("/index");
	});
});

router.put("/index:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var devourVal = req.body.devour;
  console.log(req.params.id);

  console.log("condition", condition);
  console.log(devourVal);

  burger.updateOne(devourVal, condition, function() {
    res.redirect("/index");
  });
});

// Export routes for server.js to use.
module.exports = router;
