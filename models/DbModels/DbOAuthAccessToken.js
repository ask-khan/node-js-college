/**
 * Scehma of creating User.
 * @author Copyright RIKSOF (Private) Limited 2016.
 */

var db = require( __dirname + '/db' );

var OAuthAccessTokensSchema = db.Schema ({
  accessToken: { type: String },
  clientId: { type: String },
  userId: { type: String },
  expires: { type: Date }
});

module.exports = db.model('OAuthAccessTokens', OAuthAccessTokensSchema);