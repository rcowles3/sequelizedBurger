// ====================================================================
// VARIABLES
// ====================================================================

// Importing our express module
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// ====================================================================
// ROUTES
// ====================================================================

// route to display home page
router.get("/", function(req, res) {

    // searching our sequlize db for all data, and rendering to handlebars obj
    db.burger.findAll({}).then(function(data) {

        // handlebars obj grabbing our data from our burger model
        var handleBarsObj = {
            burger: data
        };
        res.render("index", handleBarsObj);
    });
});

// route to post
router.post("/", function(req, res) {

    // sending a post to db with new burger
    db.burger.create({
        BURGER_NAME: req.body.name,
        DEVOURED: 0
    }).then(function() { // resubmit page after db has been updated
        res.redirect("/");
        // console.log("req.body", req.body);
    });
})
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.burger.update({
        DEVOURED: 1
    }, {
        where: {
            id: req.body.id
        }
    }.then(condition, function() {
        res.redirect("/");
    }))
});
// })

// router.delete("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function() {
//         res.redirect("/");
//     });
// });

// Export routes for server.js to use.
module.exports = router;