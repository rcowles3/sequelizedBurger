// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************

// ====================================================
// Module Dependancies
// ====================================================
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const db = require("./models");

// Sets up Express app
var app = express();
const PORT = process.env.PORT || 8080;

// Static page from our public dr.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// =============================================================
// Setting up handlebars
// =============================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// =============================================================
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controllers.js");

// app.use("/", routes);

// syncing our models with our database
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port", PORT);
    });
});

console.log("update");