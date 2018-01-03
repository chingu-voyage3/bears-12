var express = require('express');
var errorHandler = require('../handlers/errorHandlers');
var indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.testApi);

module.exports = router;
