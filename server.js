var config = require( __dirname + '/config.js' );
var mainController = require(__dirname + '/controllers/main.js');
var HTTP = require(__dirname + '/http-response.js');
var STRINGS = require(__dirname + '/strings.js');
var Logger = require(__dirname + '/logger.js');

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require ( 'cookie-parser' );

var app = express();

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded ({ extended: true }) );
// set cookie Parse.
app.use( cookieParser() );

mainController.setup ( app, HTTP, STRINGS, Logger );

app.get('/',function ( req, res ) {
  res.send('hello World');
});

app.listen( config.http.port   , function (){
  console.log('Example app listening on port:', config.http.port);
});
