var express = require("express");
var mongoose = require('mongoose');
var bodyparsar = require('body-parser');

var path = require('path');
//for colleges
var app = express();


var collegeRouter = require('./routes/collegeRouter');

app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/public/index.html'));


});

app.use(bodyparsar.json());
app.use(bodyparsar.urlencoded());
app.use('/api/colleges', collegeRouter);
app.use(express.static(path.join(__dirname,'public')));

//for student
//var stu = express();

var studentRouter = require('./routes/studentRouter');

app.use(bodyparsar.json());
app.use(bodyparsar.urlencoded());
app.use('/api/students', studentRouter);


//for database
mongoose.connect("mongodb://localhost/mydb", {
    useNewUrlParser: true
  })
  .then(function () {
    console.log("database connected");
  })
  .catch(function (err) {

    console.log("colud not connect to database")
  });


const PORT = 3000;
app.listen(PORT, function () {
  console.log("Server running on port : " + PORT);
});