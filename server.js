// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

// Create an instance of the express app.
const app = express();

// sets the port for this app
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// to handle more complex data structures
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars as the default templating engine.
// 'we're using handlebars and the default is 'main'
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up connection with MySQL DB
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'wishes_db',
});

// Initiates MySQL connection
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});






// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});