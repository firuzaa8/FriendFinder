var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
module.exports.app = app;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/static'));

app.listen(PORT, function() {
   
    console.log("Server listening on: http://localhost:" + PORT);
  });


require("./app/routing/htmlRoutes.js")
require("./app/routing/apiRoutes.js")
