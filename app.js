//Basic Express App
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//For database
const users = require('./models/userModel.js');
const opportunity = require('./models/opportunityModel.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//For passport OAuth
const session      = require('express-session');
var passport = require('passport');
var flash    = require('connect-flash');

//Environmental Variables
require('dotenv').config();


//Database connection and model loading
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open',function(){
	console.log('MongoDB database connected');
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Required for passport
require('./routes/config/passport')(passport); // pass passport for configuration
app.use(session({ secret: 'battery-cat-horse-couch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
const routes = require('./routes/index')(app, passport); // load our routes and pass in our app and fully configured passport
//app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
