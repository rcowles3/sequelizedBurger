// Setting up and epxoriting our MySQL connection.
const mysql = require("mysql");

// const to hold our connection credentials, hidden in .env file
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Fdd4e!i$f$",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;