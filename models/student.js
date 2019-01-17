var mongoose = require('mongoose');
var schema = mongoose.Schema;
var studentSchema = new mongoose.Schema({
    name: {
        type: String

    },

    reg_no: {
        type: String
    },
    email_id: {
        type: String
    },
    coll_id: {
        type: schema.Types.ObjectId,
        ref: "College"
    }

});

var student = mongoose.model('student', studentSchema);
module.exports = student;