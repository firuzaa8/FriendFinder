var server = require("../../server.js")
var path = require("path");
var mysql = require("mysql");
var CLEARDB_DATABASE_URL = process.env.CLEARDB_DATABASE_URL || "";

var connection;
if (CLEARDB_DATABASE_URL == "") {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "friendFinder_db"
    });
} else {
    connection = mysql.createPool(CLEARDB_DATABASE_URL);
}

connection.connect(function (err) {
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
        function (err, insertRes) {
            if (err) throw err;

            var query = connection.query(
                "SELECT * FROM profiles WHERE id != " + insertRes.insertId,
                function (err, queryRes) {
                    if (err) throw err;
                    var matches = [];
                    for (i = 0; i < queryRes.length; i++) {
                        var score = 0;

                        score += Math.abs(req.body.q1 - queryRes[i].score1);
                        score += Math.abs(req.body.q2 - queryRes[i].score2);
                        score += Math.abs(req.body.q3 - queryRes[i].score3);
                        score += Math.abs(req.body.q4 - queryRes[i].score4);
                        score += Math.abs(req.body.q5 - queryRes[i].score5);
                        score += Math.abs(req.body.q6 - queryRes[i].score6);
                        score += Math.abs(req.body.q7 - queryRes[i].score7);
                        score += Math.abs(req.body.q8 - queryRes[i].score8);
                        score += Math.abs(req.body.q9 - queryRes[i].score9);
                        score += Math.abs(req.body.q10 - queryRes[i].score10);

                        var matchScore = (100 - (score * 2.5));
                        if (matchScore >= 70) {
                            var match = {
                                name: queryRes[i].name,
                                image: queryRes[i].photos,
                                score: matchScore

                            };
                            matches.push(match);
                        }

                    }

                    return res.json(matches);
                });
        });
});




