const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;

const userSchema = mongoose.Schema({
	_id: String,
	 name: String,
	// image: String,
	// bio: String,
	// location: String,
	// rating: Number,
	// email: String,
	// pw: String,
	// role: String,
	// history: String
});

userSchema.methods.createNewUser = function(name,image,bio,location,rating,
		email,pw,role,history){
	var newEntry = new userModel({
	_id: new ObjectID(),
	name: name,
	// image: image,
	// bio: bio,
	// location: location,
	// rating: rating,
	// email: email,
	// pw: pw,
	// role: role,
	// history: history
	});

	newEntry.save(function(err){
		if( err ){
			throw err;
		} else{
			return "success";
		}
	});
}

var userModel = mongoose.model('userEntry',userSchema,'users');
module.exports = userModel;