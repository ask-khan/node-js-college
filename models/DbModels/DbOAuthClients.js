/**
 * Scehma of creating User.
 * @author Copyright RIKSOF (Private) Limited 2016.
 */

var db = require( __dirname + '/db' );

var OAuthClientsSchema = db.Schema ({
  clientId: { type: String },
  clientSecret: { type: String },
  redirectUri: { type: String }
});

module.exports = db.model('OAuthClients', OAuthClientsSchema);