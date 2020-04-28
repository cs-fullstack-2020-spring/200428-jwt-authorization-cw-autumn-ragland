let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema (
    {
        commentTitle : {required : true, type : String},
        commentsBody : {required : true, type : String},
    }
);

module.exports = mongoose.model('commentsCW200428', UserSchema);