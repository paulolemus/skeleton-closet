const winston = require('winston');
const config = require('./config');

const logger = winston.createLogger(config.winstonConfig);

module.exports = logger;
