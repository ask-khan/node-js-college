/**
 * Scehma of creating User.
 * @author Copyright RIKSOF (Private) Limited 2016.
 */

var db = require( __dirname + '/db' );

var OAuthUsersSchema = db.Schema ({
  id: String,
  username: { type: String, 'default': '' },
  lastname: { type: String, 'default': '' },
  accountType: { type: String, 'default': '' },
  email: String,
  displayPicturePath: { type: String, 'default': '' },
  password: String,
  dateOfBirth: { type: String, 'default': '' },
  country: { type: String, 'default': '' },
  verificationCode: String,
  verified: Boolean,
  deviceToken: { type: String, 'default': '' },
  resetPasswordToken: String,
  resetPasswordExpires: String,
  bio: { type: String, 'default': '' },
  facebookId: { type: String, 'default': '' },
  fbToken: { type: String, 'default': '' },
  type: String,
  favorites: [],
  feed: []
}, {
  timestamps: true
});

module.exports = db.model('OAuthUsers', OAuthUsersSchema);