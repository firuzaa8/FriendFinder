var server = require("../../server.js")
var path = require("path");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "friendFinder_db"
});

connection.connect(function(err) {
  if (err) throw err;
});


server.app.post("/api/addprofile", function (req, res) {
    console.log(req.body);
    var query = connection.query(
        "INSERT INTO profiles SET ?",
        {
            name: req.body.fullname,
            photos: req.body.image,
            score1: req.body.q1,
            score2: req.body.q2,
            score3: req.body.q3,
            score4: req.body.q4,
            score5: req.body.q5,
            score6: req.body.q6,
            score7: req.body.q7,
            score8: req.body.q8,
            score9: req.body.q9,
            score10: req.body.q10,


        },
        function (err) {
            if (err) throw err;
            return res.json({ "status": "ok" })
        });


});
