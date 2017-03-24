/**
 * Scehma of creating User.
 * @author Copyright RIKSOF (Private) Limited 2016.
 */

var db = require( __dirname + '/db' );

var exampleSchema = db.Schema ({
  id: String,
  examplefirst: { type: String, 'default': '' },
  examplelast: { type: String, 'default': '' }
  
});

module.exports = db.model('example', exampleSchema);