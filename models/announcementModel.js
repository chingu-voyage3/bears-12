const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;

const announcementSchema = mongoose.Schema({
	_id: String,
    from: String,
    to: String,
    subject: String,
    creationDate: Date,
    body: String
});

announcementSchema.methods.createNewAnnouncement = function(from, to, subject, creationDate, body){
	var newEntry = new announcementModel({
	_id: new ObjectID(),
    from: from,
    to: to,
    subject: subject,
    creationDate: creationDate,
    body: body
	});

	newEntry.save(function(err){
		if( err ){
			throw err;
		} else{
			return "success";
		}
	});
}

var announcementModel = mongoose.model('announcementEntry',announcementSchema,'announcement');
module.exports = announcementModel;