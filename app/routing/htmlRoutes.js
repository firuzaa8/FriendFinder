var server = require("../../server.js")
var path = require("path")

server.app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

server.app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
