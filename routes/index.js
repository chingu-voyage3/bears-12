//Express stuff
const express = require('express');
const errorHandler = require('../handlers/errorHandlers');
const indexController = require('../controllers/indexController');
var router = express.Router();

//testing database
const opportunity = require('../models/opportunityModel.js');
const userEntry = require('../models/userModel.js');

//For OAuth
const passport = require('passport');
const flash    = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');


// routes/index.js contains non-auth routes

router.get('/', indexController.testApi);


//testing for nonprofit profile
//need to create nonprofit user with mockdata to use
//I have been using my own mlab account to test
router.get("/api/users",(req,res)=>{
	userEntry.findOne({name:'Hotdog Fingers Society'}).exec(function( err, user){
		if(err) return errorHandler(err);
		res.send(user.description);
	});
	
});



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;
