// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userCredSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
    },
    twitter          : {
        id           : String,
        token        : String,
        name         : String,
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
    },
    linkedin         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
    },

});

// methods ======================
// generating a hash
userCredSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userCredSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('UserCred', userCredSchema);