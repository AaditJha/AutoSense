const express = require("express");
let {PythonShell} = require('python-shell')
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/months").get(function (req, res) {
  let db_connect = dbo.getDb("Autosense");
  db_connect
    .collection("Monthly-sales-figure")
    .distinct("month", function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
});

recordRoutes.route("/make").get(function (req, res) {
  let db_connect = dbo.getDb("Autosense");
  db_connect
    .collection("Monthly-sales-figure")
    .distinct("make", function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
});

recordRoutes.route("/model").get(function (req, res) {
  let db_connect = dbo.getDb("Autosense");
  db_connect
    .collection("Monthly-sales-figure")
    .distinct("model", function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
});

recordRoutes.route("/model-engage").get(function (req, res) {
  let db_connect = dbo.getDb("Autosense");
  db_connect
    .collection("Autosense-engage-dataset")
    .distinct("model", function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
});

recordRoutes.route("/details/:model").get(function (req, res) {
  let db_connect = dbo.getDb("Autosense");
  let params = req.params.model.split('+')
  let paramstr = params[0];
  for(var i = 1; i < params.length; i++){
    paramstr= paramstr+' '+params[i];
  }
  let myquery = { "model":paramstr};
  db_connect
    .collection("Autosense-engage-dataset")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
});

recordRoutes.route("/used").post(function(req,response){
  const pyshell = new PythonShell('scripts/used_car.py');
  pyshell.send(JSON.stringify(req.body));
  pyshell.on('message', function(message){
    console.log(message);
  })
  pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('finished');
  });
  response.status(200).json(req.body);
}

)

module.exports = recordRoutes;
