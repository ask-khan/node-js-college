/**
 * @author Ahmed Saboor Khan Config File.
 */

var config = {};

// Application Configuration
config.app = {};
config.app.mode = {};
config.app.user = {};
config.app.mode.DEVELOPMENT = 'development';
config.app.mode.PRODUCTION = 'production';
config.app.mode.current = config.app.mode.DEVELOPMENT;

// Http Configuration
config.http = {};
config.http.port = ( config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 3000 : 3001;

// Error Log Configuration.
// Log files
config.logger = {}
config.logger.errorFile = __dirname + '/logs/error.log';
config.logger.consoleFile = __dirname + '/logs/console.log';
config.logger.maxFileSize = 1000000;
config.logger.maxFiles = 1;

config.dbPath = ( config.app.mode.current == config.app.mode.DEVELOPMENT) ? 'mongodb://localhost:27017/node-js-college' : 'mongodb://my5ive:my5iveRoot@172.31.46.48:27017/myfive';
config.db = {}
config.db.host = config.dbPath;

module.exports = config;
