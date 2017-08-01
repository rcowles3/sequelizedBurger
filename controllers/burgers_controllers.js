// ====================================================================
// VARIABLES
// ====================================================================

// Importing our express module
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// ====================================================================
// ROUTES
// ====================================================================

// route to display home page
router.get("/", function(req, res) {
    burger.all(function(data) {

        // handlebars obj grabbing our data from our burger model
        var handleBarsObj = {
            burger: data
        };
        // testing
        // console.log(handleBarsObj);
        res.render("index", handleBarsObj);
    });
});

router.post("/", function(req, res) {
    burger.create([
        "BURGER_NAME", "DEVOURED"
    ], [
        req.body.name, null
    ], function() {
        res.redirect("/");
        // console.log("req.body", req.body);
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        DEVOURED: 1
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;