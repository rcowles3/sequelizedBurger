// ====================================================
// STARTING OUR SERVER
// ====================================================

// module dependancies
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

var port = process.env.PORT || 3000;

// express app
var app = express();

// Static page from our public dr.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);