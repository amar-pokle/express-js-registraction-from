var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//Define Routes here
app.get('/', function(req, res)  {
    res.sendFile(path.join(__dirname + '/sess.html'));
});

app.post('/submit-student-data', function(req,res)  {
  x = req.body.firstName;
  y = req.body.lastName;
  if(x=="amar" && y=="pass")
  {
    res.sendFile(path.join(__dirname + '/index.html'));
   
  }
  else
  {
    res.send("Incorrect!");
  }

});

var server = app.listen(3000, function() {
  console.log("Node Server is Running");
});
