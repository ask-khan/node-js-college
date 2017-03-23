Main = module.exports = {};

Main.setup = function MainController( app, http, strings, logger ) {

  app.get('/',function( req, res ) {
    res.send('Server is runing. /')
  });
}
