// config/auth.js

//Environmental Variables
require('dotenv').config();

// expose our config directly to our application using module.exports
module.exports = {

    'googleAuth' : {
        'clientID'      : process.env.GOOGLE_CLIENT_ID,
        'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    },
    'linkedinAuth' : {
        'clientID'      : process.env.LINKEDIN_CLIENT_ID,
        'clientSecret'  : process.env.LINKEDIN_CLIENT_SECRET,
        'callbackURL' : 'http://localhost:3000/auth/linkedin/callback'
    }

};