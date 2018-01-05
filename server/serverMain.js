const mongoose = require('mongoose');
const users = require('../database/models/userModel.js');


console.log(process.env.MONGO_URI);

const mongoDB = MONGO_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open',function(){
	console.log('MongoDB database connected');
});

users.schema.methods.createNewUser('Thomas');
users.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});


