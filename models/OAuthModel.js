/**
 * @author Copyright RIKSOF (Private) Limited 2016.
 */

'use strict';

// Our logger for logging to file and console
var logger = require(__dirname + '/../logger');

var should = require('should');
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
OAuth = module.exports;
var config = require( __dirname + '/../config' );

// Database Model
var DbOAuthUsers = require( __dirname + '/../models/DbModels/DbOAuthUsers.js' );
var DbOAuthAccessToken = require( __dirname + '/../models/DbModels/DbOAuthAccessToken.js' );
var DbOAuthRefreshToken = require( __dirname + '/../models/DbModels/DbOAuthRefreshToken.js' ); //OAuthRefreshTokensModel
var DbOAuthClient = require( __dirname + '/../models/DbModels/DbOAuthClients.js' );

/**
 * Contains all user functions.
 * @class OAuth
 * @classdesc OAuth Class
 * @author Riksof
 * @constructor
 *
 * @returns {undefined} Returns null
 */
function OAuth () {

}

/**
* getAccessToken
* @function getAccessToken
* @memberof OAuth
*
* @param {String} bearerToken bearerToken
* @param {function} callback function 
*
* @returns {undefined} Returns null
**/
OAuth.getAccessToken = function getAccessToken ( bearerToken, callback ) {

  logger.info('in getAccessToken (bearerToken: ' + bearerToken + ')');

  DbOAuthAccessToken.findOne({ accessToken: bearerToken }, callback);
  
};

/**
* getClient
* @function getClient
* @memberof OAuth
*
* @param {String} clientId clientId
* @param {String} clientSecret clientSecret
* @param {function} callback function 
*
* @returns {undefined} Returns null
**/
OAuth.getClient = function getClient ( clientId, clientSecret, callback ) {

  logger.info('in getClient (clientId: ' + clientId + ', clientSecret: ' + clientSecret + ')');

  if ( clientSecret === null ) {
    return DbOAuthClient.findOne({ clientId: clientId }, callback);
  }

  DbOAuthClient.findOne( { clientId: clientId, clientSecret: clientSecret }, callback );

};

/**
* grantTypeAllowed
* @function grantTypeAllowed
* @memberof OAuth
*
* @param {String} clientId clientId
* @param {String} grantType grantType
* @param {function} callback function 
*
* @returns {undefined} Returns null
**/
OAuth.grantTypeAllowed = function grantTypeAllowed ( clientId, grantType, callback ) {

 logger.info('in grantTypeAllowed (clientId: ' + clientId + ', grantType: ' + grantType + ')');

  callback( false, true );

};

/**
* saveAccessToken
* @function saveAccessToken
* @memberof OAuth
*
* @param {String} token token
* @param {String} clientId clientId
* @param {String} expires expires
* @param {String} userId userId
* @param {function} callback function 
*
* @returns {undefined} Returns null
**/
OAuth.saveAccessToken = function saveAccessToken ( token, clientId, expires, userId, callback ) {
  logger.info('in saveAccessToken (token: ' + token + ', clientId: ' + clientId + ', userId: ' + userId + ', expires: ' + expires + ')');

  var accessToken = new DbOAuthAccessToken({
    accessToken: token,
    clientId: clientId,
    userId: userId,
    expires: expires
  });

  accessToken.save( callback );
};

/**
* getUser
* @function getUser
* @memberof OAuth
*
* @param {String} username username
* @param {String} password password
* @param {function} callback function 
*
* @returns {undefined} Returns null
**/
OAuth.getUser = function getUser ( username, password, callback ) {

  logger.info('in getUser (email: ' + username + ', password: ' + password + ')');

  DbOAuthUsers.findOne( { email: username, password: password }, function getDataFromDBCallback ( err, user ) {

    if ( err ) {
      callback ( err );
      return;
    } else {
      if ( user ) {
        callback ( false, user._id );
      } else {
        callback ( false, false );
      }
    }

  });
};

/**
* saveRefreshToken
* @function saveRefreshToken
* @memberof OAuth
*
* @param {String} token token
* @param {String} clientId clientId
* @param {String} expires expires
* @param {String} userId userId
* @param {function} callback function  
*
* @returns {undefined} Returns null
**/
OAuth.saveRefreshToken = function saveRefreshToken ( token, clientId, expires, userId, callback ) {
  
  logger.info('in saveRefreshToken (token: ' + token + ', clientId: ' + clientId +', userId: ' + userId + ', expires: ' + expires + ')');

  var refreshToken = new DbOAuthRefreshToken({
    refreshToken: token,
    clientId: clientId,
    userId: userId,
    expires: expires
  });

  refreshToken.save( callback );

};

/**
* getRefreshToken
* @function getRefreshToken
* @memberof OAuth
*
* @param {String} refreshToken refreshToken
* @param {function} callback function 
*
* @returns {undefined} Returns null
**/
OAuth.getRefreshToken = function getRefreshToken ( refreshToken, callback ) {

  logger.info('in getRefreshToken (refreshToken: ' + refreshToken + ')');

  DbOAuthRefreshToken.findOne ( { refreshToken: refreshToken }, callback );

};

/**
* getUserFromClient
* @function getUserFromClient
* @memberof OAuth
*
* @param {String} clientId clientId
* @param {String} clientSecret clientSecret
* @param {function} callback function 
*
* @returns {undefined} Returns null
**/
OAuth.getUserFromClient = function getUserFromClient ( clientId, clientSecret, callback ) {

  callback( false, true );

};