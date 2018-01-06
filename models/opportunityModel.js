const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;

const opportunitySchema = mongoose.Schema({
	_id: String,
	 title: String,
	// description: String,
	// contactInfo: String,
	// location: String,
	// image: String,
	// startDate: Number,
    // endDate: Number,
    // times: Number,
	// events: Array,
    // skills: Array,
    // interestedUsers: Array
});

opportunitySchema.methods.createNewOpportunity = function(title, description, contactInfo, location, image,
		startDate, endDate, times, events, skills, interestedUsers){
	var newEntry = new opportunityModel({
	_id: new ObjectID(),
    title: title,
	// description: description,
	// contactInfo: contactInfo,
	// location: location,
	// image: image,
	// startDate: startDate,
    // endDate: endDate,
    // times: times,
	// events: events,
    // skills: skills,
    // interestedUsers: interestedUsers
	});

	newEntry.save(function(err){
		if( err ){
			throw err;
		} else{
			return "success";
		}
	});
}

var opportunityModel = mongoose.model('opportunityEntry',opportunitySchema,'opportunity');
module.exports = opportunityModel;