var config = require( __dirname + '/config.js' );
var mainController = require(__dirname + '/controllers/main.js');
var oauthController = require( __dirname + '/controllers/OAuth' );
var exampleController = require ( __dirname + '/controllers/User.js' );
var HTTP = require(__dirname + '/http-response.js');
var STRINGS = require(__dirname + '/strings.js');
var Logger = require(__dirname + '/logger.js');

// Database Model
var DbOAuthUsers = require( __dirname + '/models/DbModels/DbOAuthUsers.js' );
var DbOAuthAccessToken = require( __dirname + '/models/DbModels/DbOAuthAccessToken.js' );
var DbOAuthRefreshToken = require( __dirname + '/models/DbModels/DbOAuthRefreshToken.js' ); //OAuthRefreshTokensModel
var DbOAuthClient = require( __dirname + '/models/DbModels/DbOAuthClients.js' );
var DbExample = require( __dirname + '/models/DbModels/Example.js' );

// Module Declare
var oauthserver = require('oauth2-server');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require ( 'cookie-parser' );

var app = express();

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded ({ extended: true }) );

// set cookie Parse.
app.use( cookieParser() );

// Models.
app.oauth = oauthserver({
  model: require( __dirname + '/models/OAuthModel'),
  accessTokenLifetime: 2592000,
  grants: ['client_credentials', 'password'],
  debug: false
});

// OAuth Error Handler
app.use(app.oauth.errorHandler());

// main controller.
mainController.setup ( app, HTTP, STRINGS, Logger );

// example controller.
exampleController.setup( app, HTTP, STRINGS, Logger , DbOAuthUsers, DbExample );


oauthController.setup( app );

app.listen( config.http.port   , function (){
  console.log('Example app listening on port:', config.http.port);
});
