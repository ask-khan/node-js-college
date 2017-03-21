Main = module.exports = {};

Main.setup = function MainController( app, http, strings, logger ) {

  app.get('/',function( req, res ) {
    logger.info('Inside /');
    res.send('Inside /')
  });
}
