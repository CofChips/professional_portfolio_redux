var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log(path.join(__dirname, "../public/index.html"));
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/about", function (req, res) {
        console.log(path.join(__dirname, "../public/about.html"));
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/portfolio", function (req, res) {
        console.log(path.join(__dirname, "../public/portfolio.html"));
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

    app.get("/contact", function (req, res) {
        console.log(path.join(__dirname, "../public/contact.html"));
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
}