// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/", function(req, res) {
        db.burger.findAll().then(function(allBurgers) {
            var hbsObj = { burger: allBurgers };
            // console.log(allBurgers);
            res.render("index", hbsObj);
        });
    })

    app.post("/", function(req, res) {
        db.burger.create(req.body).then(function(allBurgers) {
            res.redirect("/");
        })
    })

    app.put("/:id", function(req, res) {
        var eatenBurger = {
            DEVOURED: 1
        }
        
        console.log("REQUEST: \n\n", req);
        console.log("REQUEST PARAMS: \n\n", req.params);
        // if(err) throw err; // err catcher
        
        // db.burger.update(eatenBurger, {
        //     where: {
        //         id: req.params.id
        //     }
            
            
        // }).then(function(allBurgers) {
        //     // res.redirect("/");
        //     if(err) throw err; // err catcher
        // })
    })
}