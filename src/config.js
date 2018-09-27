const winston = require('winston');

const env = process.env.NODE_ENV || 'development';

let config = null;

if (env === 'development') {
  config = {
    env,
    port: 8080,
    winstonConfig: {
      level: 'debug',
      format: winston.format.json(),
      transports: [
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({ format: winston.format.simple() }),
      ],
    },
  };
} else if (env === 'staging') {
  // TODO
} else if (env === 'production') {
  // TODO
}

module.exports = config;
