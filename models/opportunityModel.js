
const Schema = require('mongoose').Schema;
const mongoose = require("mongoose");
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const validator = require('mongoose-validators');
// var ObjectID = require("mongodb").ObjectID;

const opportunitySchema = mongoose.Schema({
	 title: {
		type: String,
		unique: true,
		trim: true,
		required: 'Please supply a title for your opportunity'	 
	 },
	description: {
		type: String,
		trim: true,
		validate: [validator.isLength({ message: 'The description needs to be between 140 to 15000 characters'}, 140, 15000)]
	},
	location: String,
	// organization: Schema.Types.ObjectId,
	startDate: {
		type: Number,
		required: true,
	},
    endDate: {
		type: Number,
		required: true,
	},
    skillsRequired: [String],
    // interestedUsers: [Schema.Types.ObjectId]
});

opportunitySchema.methods.createNewOpportunity = function(title, description, location,
		startDate, endDate, skills, /* interestedUsers */) {
	var newEntry = new Opportunity({
	_id: new ObjectID(),
    title: title,
	description: description,
	location: location,
	startDate: startDate,
    endDate: endDate,
    skillsRequired: skills,
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

opportunitySchema.pre('save', (next) => {
	const date = Math.round(Date.now() / 1000);

	if(this.startDate < date) next(new Error('The start date cannot be in the past'))
	if(this.endDate < date) next(new Error('The end date cannot be in the past'));
	if(this.startDate > this.endDate) next(new Error('The end date cannot be before the start date'))

	next()
})

mongoose.plugin(mongodbErrorHandler);

var opportunityModel = mongoose.model('opportunityModel',opportunitySchema);
module.exports = opportunityModel;