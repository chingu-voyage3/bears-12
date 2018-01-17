//Express stuff
const express = require('express');
const router = express.Router();
const errorHandler = require('../handlers/errorHandlers');
const indexController = require('../controllers/indexController');
const opportunityController = require('../controllers/opportunityController');

//For OAuth
const flash    = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');


// routes/index.js contains non-auth routes

router.get('/fish', indexController.testApi);
router.post('/op', opportunityController.createOpportunity);



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;
