
Example = module.exports = {};

Example.setup = function ( app, HTTP, STRINGS, Logger , DbOAuthUsers, DbExample ) {

	app.post('/insert/data',function InsertData ( req, res ) {
		
		Logger.info( 'Insert data' );
		
		// Map Data
		var userData = new DbExample();
		userData.examplefirst = req.body.examplefirst;
		userData.examplelast = req.body.examplelast; 

		// Save User
    	userData.save ( function userSave ( err, newUser ) {
    		if ( newUser ) {
    			Logger.info( 'Save Suceesfully.' );
    			res.status( HTTP.OK ).jsonp( STRINGS.RUNING );
      		return;
    		}else {
    			Logger.info( 'Not Save Suceesfully.' );
    			res.status( HTTP.BAD_REQUEST ).jsonp( STRINGS.NOT_RUNING );
    		}
    	});
	});
}