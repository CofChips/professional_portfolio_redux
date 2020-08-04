var express = require("express");
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");
// for sending mail (nodemailer)
// const sendMail = require("./config/mail");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
//   });