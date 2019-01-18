var express = require("express");

const app = express();
var router = express.Router();
const Student = require('../models/student');

//for student list
//http://localhost:3000/api/students

// router.get('/', function (req, res) {
//     Student.find({}, function (err, student) {
//         res.json(student);
//     });

// });
router.get('/:id', function (req, res) {
    Student.findOne({
        _id: req.params.id
    }, function (err, student) {
        res.json(student);
    });

});

router.delete('/:id', function (req, res) {
    Student.findOneAndDelete({
        _id: req.params.id
    }, function (err, student) {
        res.send('deleted Successfully');
    });


});

/*
//college id fetch from students connect reference college table in home page
router.get('/',function(req,res){
    student.find({})
    .populate('college',"name-_id")
    .then(function(student){
        res.json(student)
    })
    .catch(function(err){
        console.log(err);
    });
});
*/

//college id fetch from students connect reference college table in home page
router.get('/',function(req,res){
    student.find({})
    .populate('college',"name-_id")
    .then(function(student){
        res.json(student)
    })
    .catch(function(err){
        console.log(err);
    });
});

//save details
router.post('/', function (req, res) {
    var student_name = req.body.name;
    var student_reg = req.body.reg_no;
    var email_id1 = req.body.email_id;
    var student_coll = req.body.coll_id;

    const student = new Student({
        name: student_name,
        email_id: email_id1,
        reg_no: student_reg,
        coll_id: student_coll
    });
    student.save().then(function () {
        res.json(student);
    });
});






module.exports = router;