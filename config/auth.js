// config/auth.js

//Environmental Variables
require('dotenv').config();

// expose our config directly to our application using module.exports
module.exports = {

    'googleAuth' : {
        'clientID'      : process.env.GOOGLE_CLIENT_ID,
        'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL'   : 'http://localhost:3001/auth/google/callback'
    },
    'linkedinAuth' : {
        'clientID'      : process.env.LINKEDIN_CLIENT_ID,
        'clientSecret'  : process.env.LINKEDIN_CLIENT_SECRET,
        'callbackURL' : 'http://localhost:3001/auth/linkedin/callback'
    },
    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOK_APP_ID, // your App ID
        'clientSecret'  : process.env.FACEBOOK_APP_SECRET, // your App Secret
        'callbackURL'   : 'http://localhost:3001/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'emails', 'name'] // For requesting permissions from Facebook API
    },
    'twitterAuth' : {
        'consumerKey'   : process.env.TWITTER_CONSUMER_KEY,
        'consumerSecret' : process.env.TWITTER_CONSUMER_SECRET,
        'callbackURL' : 'http:/127.0.0.1:3000/auth/twitter/callback'
    }

};