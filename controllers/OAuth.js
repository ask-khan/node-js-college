/**
 * @author Copyright RIKSOF (Private) Limited 2016.
 */

authenticate = module.exports = {};

authenticate.setup = function( app ) {
  /**
   * @api {post} /oauth/token REST API to get the oauth token.
   * @apiName Postoauth
   * @apiGroup Authenticate 
   *
   * @apiParam {String} grant_type grant_type to get token with ( password / client_credentials ).
   * @apiParam {String} client_id client_id of user.
   * @apiParam {String} client_secret client_secret of user.
   * @apiParam {String} username username of user.
   * @apiParam {String} password password of user.
   *
   * @apiSuccess (Success) {String} token_type  Token Type.
   * @apiSuccess (Success) {String} access_token  Access Token.
   * @apiSuccess (Success) {Number} expires_in  Token Expiry Time.
   * @apiSuccessExample {json} Success-Response:
   * Response:
   * {
   *   token_type: 'bearer'
   *   access_token: '609abcae-8fb1-4de2-b0fa-df660e68d9c7'
   *   expires_in: 3600
   * }
   *
   */
  app.all('/oauth/token', app.oauth.grant());

}


