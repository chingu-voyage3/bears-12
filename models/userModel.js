const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
var bcrypt   = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
    _id: String,
    name: String,
    userType: String,
    description: String,
    location: Object,
    image: String
	// bio: String,
	// location: String,
	// rating: Number,
	// email: String,
	// pw: String,
	// role: String,
	// history: String
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.methods.createNewUser = function(name, usertype,description,location, image){
	var newEntry = new userModel({
	_id: new ObjectID(),
	name: name,
	usertype: usertype,
	description: description,
	location: location,
    image: image
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